import React from "react";
const Ske = () => {
  console.log('ske234')
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<style>
  .skeleton-common {
  position: absolute;
  background:#e9e9e9 linear-gradient(90deg, rgba(0, 0, 0, 0.06) 50%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.06) 63%);
  background-size: 400% 100%;
  animation-name: loading;
  animation-duration: 1.4s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  }
  
  @keyframes loading {
  0% {
    background-position: 100% 50%;
  }
  to {
    background-position: 0% 50%;
  }
  }
  
  @keyframes opacity {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
  }
  </style><div style="position: relative; width: 1200px; height: 308px;"><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:96.67%;height:100%;left:1.67%;top:0%;background-color:rgb(255, 255, 255);border-radius:4px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:92.33%;height:8.12%;left:3.83%;top:5.84%;background-color:rgba(0, 0, 0, 0);border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:92.33%;height:72.4%;left:3.83%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:26.33%;height:71.43%;left:3.83%;top:18.18%;background-color:rgb(238, 238, 238);border-radius:6px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:72.4%;left:32.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:18%;height:72.4%;left:78.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:72.4%;left:32.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:15.75%;height:41.56%;left:80.42%;top:44.25%;background-color:rgba(0, 0, 0, 0);border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:10.71%;left:32.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:56.82%;left:32.17%;top:33.77%;background-color:rgba(0, 0, 0, 0);border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:3.58%;height:5.84%;left:72.92%;top:20.62%;background-color:rgba(0, 0, 0, 0);border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:10.71%;left:32.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:56.82%;left:32.17%;top:33.77%;background-color:rgba(0, 0, 0, 0);border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:10.71%;left:32.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:10.71%;left:32.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:13.5%;height:10.71%;left:32.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:4.17%;height:10.71%;left:32.17%;top:18.18%;background-color:rgb(255, 255, 255);border-radius:8px 8px 0px 0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:4.17%;height:10.71%;left:36.67%;top:18.18%;background-color:rgb(242, 243, 247);border-radius:8px 8px 0px 0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:4.17%;height:10.71%;left:41.17%;top:18.18%;background-color:rgb(242, 243, 247);border-radius:8px 8px 0px 0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:96.67%;height:100%;left:1.67%;top:0%;background-color:rgb(255, 255, 255);border-radius:4px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:4px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:92.33%;height:8.12%;left:3.83%;top:5.84%;background-color:rgba(0, 0, 0, 0);border-radius:0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:92.33%;height:72.4%;left:3.83%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:26.33%;height:71.43%;left:3.83%;top:18.18%;background-color:rgb(238, 238, 238);border-radius:6px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:6px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:72.4%;left:32.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:18%;height:72.4%;left:78.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px;border-width:0px 0px 0px 1px;border-style:none none none solid;border-color:#f4f4f4;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:72.4%;left:32.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:15.75%;height:41.56%;left:80.42%;top:44.25%;background-color:rgba(0, 0, 0, 0);border-radius:0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:10.71%;left:32.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:56.82%;left:32.17%;top:33.77%;background-color:rgba(0, 0, 0, 0);border-radius:0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:3.58%;height:5.84%;left:72.92%;top:20.62%;background-color:rgba(0, 0, 0, 0);border-radius:0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:10.71%;left:32.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:56.82%;left:32.17%;top:33.77%;background-color:rgba(0, 0, 0, 0);border-radius:0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:10.71%;left:32.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:44.33%;height:10.71%;left:32.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:13.5%;height:10.71%;left:32.17%;top:18.18%;background-color:rgba(0, 0, 0, 0);border-radius:0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:4.17%;height:10.71%;left:32.17%;top:18.18%;background-color:rgb(255, 255, 255);border-radius:8px 8px 0px 0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:8px 8px 0px 0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:4.17%;height:10.71%;left:36.67%;top:18.18%;background-color:rgb(242, 243, 247);border-radius:8px 8px 0px 0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:8px 8px 0px 0px"></div><div data-ske-id="pmod-foreign-trade-news" style="position: absolute;width:4.17%;height:10.71%;left:41.17%;top:18.18%;background-color:rgb(242, 243, 247);border-radius:8px 8px 0px 0px;border-width:0px;border-style:none;border-color:#f4f4f4;border-radius:8px 8px 0px 0px"></div><div data-ske-id="pmod-foreign-trade-news" class="skeleton-common" style="position: absolute;width:6%;height:7.51%;left:3.83%;top:6.15%;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" class="skeleton-common" style="position: absolute;width:26.33%;height:71.43%;left:3.83%;top:18.18%;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" class="skeleton-common" style="position: absolute;width:15.75%;height:5.84%;left:80.42%;top:18.18%;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" class="skeleton-common" style="position: absolute;width:15.75%;height:12.76%;left:80.42%;top:28.24%;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" class="skeleton-common" style="position: absolute;width:15.75%;height:41.56%;left:80.42%;top:44.25%;border-radius:NaN"></div><div data-ske-id="pmod-foreign-trade-news" class="skeleton-common" style="position: absolute;width:3.58%;height:5.84%;left:72.92%;top:20.62%;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" class="skeleton-common" style="position: absolute;width:44.33%;height:6.49%;left:32.17%;top:33.77%;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" class="skeleton-common" style="position: absolute;width:44.33%;height:6.49%;left:32.17%;top:43.83%;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" class="skeleton-common" style="position: absolute;width:44.33%;height:6.49%;left:32.17%;top:53.9%;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" class="skeleton-common" style="position: absolute;width:44.33%;height:6.49%;left:32.17%;top:63.96%;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" class="skeleton-common" style="position: absolute;width:44.33%;height:6.49%;left:32.17%;top:74.03%;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" class="skeleton-common" style="position: absolute;width:44.33%;height:6.49%;left:32.17%;top:84.09%;border-radius:0px"></div><div data-ske-id="pmod-foreign-trade-news" class="skeleton-common" style="position: absolute;width:13.170000000000002%;height:10.71%;left:32.17%;top:18.18%;border-radius:NaN"></div></div>`,
      }}
    ></div>
  );
};

export default ({ isLoading = true, children }) => {
  return isLoading ? <Ske /> : children;
};
