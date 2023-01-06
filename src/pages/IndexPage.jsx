import { store } from "..";
import Header from "../components/Header/Header";
import IndexAuthorize from "../components/Index/IndexAuthorize";
import IndexUnAuthorize from "../components/Index/IndexUnAuthorize";
function IndexPage() {
	if (store.isAuth) return IndexAuthorize();
	else return IndexUnAuthorize();
}
export default IndexPage;
