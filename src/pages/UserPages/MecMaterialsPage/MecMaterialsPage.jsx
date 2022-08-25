import React from "react";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import {useDispatch,useSelector} from "react-redux";
import {getSubjectsAction} from "../../../redux/User/User.action";

const MecMaterialsPage = () => {
    const dispatch = useDispatch();
    const materialsStore = useSelector(store => store?.UserReducer?.subjects.data);
   // console.log(materialsStore);
    React.useEffect(()=>{
        dispatch(getSubjectsAction());
    },[]);
    return(
        <div>
        <Nav/>

    <Footer/>
        <div>
            Mec Materials Page
        </div>
        </div>
    );

}
export default MecMaterialsPage;