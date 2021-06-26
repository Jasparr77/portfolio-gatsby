import React,{ useEffect } from "react";

let width = 1280;
let height = 900;

const Boxes = () =>{
  useEffect(()=>{
    width = window.innerWidth;
    height = window.innerHeight;
  }),[]
  return (
    <div>
      :P
    </div>
  )
}