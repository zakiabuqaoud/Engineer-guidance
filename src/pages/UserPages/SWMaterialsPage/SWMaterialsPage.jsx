import React from 'react'
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import {useDispatch,useSelector} from "react-redux";
import {getSubjectsAction} from "../../../redux/User/User.action";

const SWMaterialsPage=()=>{
    const dispatch = useDispatch();
    const materialsStore = useSelector(store => store?.UserReducer?.subjects.data);
   // console.log(materialsStore);
    React.useEffect(()=>{
        dispatch(getSubjectsAction())
    },[]);
    return(
        <div>
            <div>
                SWMaterialsPage
            </div>
            <Nav/>
            <Footer/>
        </div>
    );

}
export default SWMaterialsPage;