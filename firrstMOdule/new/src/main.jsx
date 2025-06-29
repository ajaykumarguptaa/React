import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HideAndShow } from "./Toggle_Hide_And_Show/HideAndShow.jsx";
import HideShow from "./Toggle_Hide_And_Show/Hide&Show.jsx";
import Props from "./Props/Props.jsx";
import { Input } from "./InputField/Input.jsx";
import { ControllComp } from "./Controlled_Component/ControllComp.jsx";
import { HandleCheck } from "./HandleChecckBox/HandleCheck.jsx";
import { HandleRadio } from "./HandleChecckBox/HandleRadio.jsx";
import { Loop_map } from "./Loop_in_Jsx/Loop_map.jsx";
import { Project1 } from "./Project/Project1.jsx";
import MainTest from "./Project/MainTest.jsx";
import NestedLoop from "./Loop_Nested/NestedLoop.jsx";
import USeeffect from "./UseEffect/USeeffect.jsx";
import Style from "./styleInReact/style.jsx";
import Style2 from "./styleInReact/Style2.jsx";
import Inline from "./TypesOfStyling/Inline.jsx";
import StyleComponent from "./TypesOfStyling/Stylecomponent/StyleComponent.jsx";
import Bootstrap from "./Bootstrap/Bootstrapcomp.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrapcomp from "./Bootstrap/Bootstrapcomp.jsx";
import Useref from "./UseRef/Useref.jsx";
import UncontrollEvent from "./UncontrolledComponents/UncontrollEvent.jsx";
import EventPass from "./Passing Functio As a Props/EventPass.jsx";
import OlderMethod from "./ForWard Ref/OlderMethod.jsx";
import React9MethodFordRef from "./ForWard Ref/React9MethodFordRef.jsx";
import Submit from "./UseformStatus/Submit.jsx";
import UseTransition from "./UseTransitionform/UseTransition.jsx";
import DirectUseTransition from "./UseTransitionform/DirectUseTransition.jsx";
import DriveState from "./DriveState/DriveState.jsx";
import AppLift from "./Lifting State Up In React/AppLift.jsx";
import UpdateObject from "./Updating Object in  state/UpdateObject.jsx";
import ArrayUpdate from "./Array update in react/ArrayUpdate.jsx";
import ActionState from "./UseActionStatte/ActionState.jsx";
import UseId from "./UseId Hook/UseId.jsx";
import AppClone from "./ContextApi/AppClone.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <HideShow/> */}
    {/* <Props/> */}
    {/* <Input/> */}
    {/* <ControllComp/> */}
    {/* <HandleCheck/> */}
    {/* <HandleRadio/> */}
    {/* <Loop_map/>  */}
    {/* <Project1/> */}
    {/* <MainTest/> */}
    {/* <NestedLoop/> */}
    {/* <USeeffect/> */}
    {/* <Style/> */}
    {/* <Style2/> */}
    {/* <Inline/> */}
    {/* <StyleComponent/> */}
    {/* <Bootstrapcomp/> */}
    {/* <Useref /> */}
    {/* <UncontrollEvent /> */}
    {/* <EventPass/> */}
    {/* <OlderMethod/> */}
    {/* <React9MethodFordRef/> */}
    {/* <Submit/> */}
    {/* <UseTransition/> */} 
    {/* <DirectUseTransition/> */}
    {/* <DriveState/> */}
    {/* <AppLift/> */}
    {/* <UpdateObject/> */}
    {/* <ArrayUpdate/> */}
    {/* <ActionState/> */}
    {/* <UseId/> */}
    <AppClone/>
    

  </StrictMode>
);
