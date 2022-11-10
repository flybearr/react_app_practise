import { useRef,useEffect,useState} from "react";
import {productData} from './../data/product-data';
function Canvas () {
  const cRef = useRef();
  const [cart,setCart] = useState([])
  const [pnum,setPnum] = useState(0);
  //加入購物車方法
const cartAdd = (pid) =>{
  let p =productData.find((el=> el.id === pid));
  if(p){
    p= {...p};
    p.tid = Date.now();
    const CurrentCart = [...cart,p];
    setCart(CurrentCart);
    console.log(CurrentCart);
  } 
}

  //加入購物車裡的商品方法
const cartRemove = (tid) => {
  const newCart = cart.filter((v,i)=>{return v.tid !== tid})
  setCart(newCart);
};

const getItemFromPath = (path) =>{
  return new Promise((resolve,reject)=>{
    const img = new Image();
    img.onload = ()=>{
      resolve(img);
    };
    img.src = path;
  })
}

const renderBG =async()=>{
  const ctx = cRef.current.getContext('2d');
  ctx.clearRect(0,0, cRef.current.width, cRef.current.height);

  const img =await getItemFromPath('/imgs/dish.jpeg')
  ctx.drawImage(img,0,0);
}


const renderCart = async ()=>{
  const ctx = cRef.current.getContext('2d');

  let x=0,y=0;
  for(let item of cart){
    const img = await getItemFromPath('/imgs/' + item.img)

    ctx.drawImage(img,x,y);
    x +=100;
    y += 100;
  }

};


  useEffect(()=>{
    (async()=>{
      await renderBG();
      await renderCart();
    })();

    
 
 
  },[cart])
  
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
          {productData.map((v,i)=>{
            return <img src={'/imgs/' + v.img } alt={v.name} key={v.id} width="150" onClick={()=>{
              cartAdd(v.id)
            }} />;
          })}
          </div>
        </div>

       {/* ---------------------- */}

 
      <div className="row">
        <div className="col">
       {cart.map((v,i)=>{
            return <div key={v.tid} style={{display:'inline-block'}}>
             <img src={'/imgs/' + v.img } alt={v.name}  width="50" onClick={()=>{cartRemove(v.tid)}} />
             </div>
          })}
          </div>
    </div>
            <canvas ref={cRef}  width="800" height="500px" style={{border : '1px solid red'}}>
            </canvas>
   

   
    </div>
    </>
  );
}
export default Canvas ;