import { Html,useProgress } from "@react-three/drei";



const Loader = () => {
  const {progress}=useProgress();
  return (
    <Html>
      <span className='w-screen canvas-load'>
    <div className="w-40/12 mt-2 bg-purple-900 py-0 rounded-full"><div className=" text-white text-sm inline-block bg-purple-700 px-2 rounded-full"> <p
      style={{fontSize:14,
      color:'#f1f1f1',
      fontWeight:800,
      }}>{progress.toFixed(2)}%</p></div>
  </div>
</span>
     
       
    </Html>
  )
}

export default Loader