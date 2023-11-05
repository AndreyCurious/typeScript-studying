import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import * as UserActionCreators from '../store/action-creator/user';

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreators, dispatch)
}