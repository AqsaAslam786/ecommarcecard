interface type ClothCardProps{
    clothingcard : ecommCardType
}
const ClothCard = () => {
  return (
    <div >
        <div  className="bg-amber-100 w-90 h-160 ml-160 mt-20 justify-center items-center">

      <img className="w-full object-cover p-3" src="https://www.junaidjamshed.com/media/catalog/product/4/6/46979jcks_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755" alt="" />
      <p className="pl-2">MUSTERD BLENDED PLAIN KAMEEZ SHAWLWAR</p>
      <h1 className="font-bold text-left pl-2">PKR 3,790.00</h1>
      <button className="ml-2 mt-2 border border-black w-35 h-10 ">ADD TO BAG</button>
        </div>
    </div>
  )
}

export default ClothCard
