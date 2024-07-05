import Link from "next/link";
import { Basket, BasketCounter, CheckoutLink, Logo, ManageBlock, Nav, Option, OptionBottomLine, OptionTopLine, SearchBox, SearchButton, SearchInput } from "./styled";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { selectUser, signOut } from "@/store/reducers/userReducer";
import { auth } from "../../../lib/firebase";
import { useRouter } from "next/router";
import { removeAll, selectCartItemsCount } from "@/store/reducers/cartReducer";
import logo from '@/common/imgs/amazon-logo.png'

export const Header = () => {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const basketCount = useAppSelector(selectCartItemsCount);

  const handleSignIn = () => {
    if(user) {
      auth.signOut();
      dispatch(removeAll())
      dispatch(signOut())
    } else {
      router.push('/login')
    }
  }
  return (
    <Nav>
      <Link href={"/"}>
        <Logo
          src={logo}
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      {/* <SearchBox>
        <SearchInput type="text"/>
        <SearchButton />
      </SearchBox> */}
    <ManageBlock>
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
          <BasketCounter>{basketCount}</BasketCounter>
        </Basket>
      </CheckoutLink>
      </ManageBlock>
    </Nav>
  );
};
