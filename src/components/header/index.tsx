import Link from "next/link";
import { Basket, BasketCounter, CheckoutLink, Logo, Nav, Option, OptionBottomLine, OptionTopLine, SearchBox, SearchButton, SearchInput } from "./styled";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { selectUser, signOut } from "@/store/reducers/userReducer";
import { auth } from "../../../lib/firebase";
import { useRouter } from "next/router";

export const Header = () => {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleSignIn = () => {
    if(user) {
      auth.signOut();
      dispatch(signOut())
    } else {
      router.push('/login')
    }
  }
  return (
    <Nav>
      <Link href={"/"}>
        <Logo
          src={
            "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png"
          }
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <SearchBox>
        <SearchInput type="text"/>
        <SearchButton />
      </SearchBox>

      <Option>
        <OptionTopLine>Hello {user?.email}</OptionTopLine>
          <OptionBottomLine onClick={() => handleSignIn()}>{user !== null ? "Sign out" : "Sign in"}</OptionBottomLine>
      </Option>

      <Option>
        <OptionTopLine>Returns</OptionTopLine>
          <OptionBottomLine>& Orders</OptionBottomLine>
      </Option>

      <CheckoutLink href="/checkout">
        <Basket>
          <ShoppingCartOutlinedIcon />
          <BasketCounter>{'1'}</BasketCounter>
        </Basket>
      </CheckoutLink>
    </Nav>
  );
};
