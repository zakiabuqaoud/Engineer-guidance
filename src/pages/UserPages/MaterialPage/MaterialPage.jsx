import React from "react";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {getOneSubjectAction} from "../../../redux/User/User.action";

const MaterialPage=()=>{
  //  const Params = useParams();
   // console.log("params",Params?.id);
//    const dispatch = useDispatch();
 //  const dataStore = useSelector(store => store);
    //console.log("data store", dataStore)
    React.useEffect(()=>{
   //     dispatch(getOneSubjectAction(Params?.id));
    },[])
    return(
        <div>
        <Nav/>
            <div>
                Material Page
            </div>
    <Footer/>


        </div>
    );

}
export default MaterialPage;