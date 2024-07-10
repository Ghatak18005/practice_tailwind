import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      <div className="bg-black h-screen">
        <motion.div 
          className="border-amber-400 border-solid border-[1vh] rounded-[10vh] w-[90vw] h-[90vh] mt-[5vh] ml-[5vw] absolute bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        > 
          <div className="flex ml-[5vw] mt-[3vh] space-x-[1vh]">
            <motion.img 
              className="w-[2vw] h-[5vh]" 
              src="/text.svg"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />   
            <motion.img 
              className="w-[8vw] h-[5vh]" 
              src="textimg.svg"
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />       
          </div>

          <motion.div 
            className="mt-[2.4vh] text-[2vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <nav className="text-black flex space-x-[6vh] ml-[24vw] -mt-[6.5vh]">
              <ul className="text-[#EC368D]">GAME CONTROLLERS</ul>
              <ul>VR ACCESSORIES</ul>
              <ul>MEDIA REMOTES</ul>
              <ul>OTHERS</ul>
            </nav>
            <div className="flex space-x-[4vh] ml-[76vw] -mt-[3.6vh]">
              <img className="w-[1.5vw] h-[3vh]" src="search.svg"></img>
              <img className="w-[1.5vw] h-[3vh]" src="bar.svg"></img>
              <img className="w-[1.5vw] h-[3vh]" src="bag.svg"></img>
            </div>
          </motion.div>

          <div className="border-[#e22f5b] border-solid border-[1vh] h-[25vh] w-[0.1vw] absolute mt-[25vh] ml-[8vw]"></div>
          
          <motion.div 
            className="mt-[26vh] ml-[12vw] font-mono size-[18vw] relative font-bold text-[5vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            PS4 V2 DualShock 4
          </motion.div>
          
          <motion.div 
            className="w-[22vw] font-mono top-[48vh] ml-[12vw] absolute opacity-75 text-[2vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Wireless Controller For PlayStation 4 (CompatibilityCentric)
          </motion.div>
          
          <motion.div 
            className="w-[22vw] font-mono font-bold top-[57vh] ml-[12vw] absolute text-[3vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            ₹4,000
          </motion.div>
          
          <motion.div 
            className="h-[7.5vh] w-[18vw] bg-[#e22f5b] rounded-[5vh] ml-[12vw] top-[65vh] absolute text-center text-white text-lg"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="flex flex-row items-center">
                <span className="text-[2.5vh]">BUY NOW</span>
                <span className="text-[6vh] mb-[1vh] ml-[1vw]">&rarr;</span>
              </div>
            </div>
          </motion.div>

          <div className="flex space-x-[10vh] ml-[16vw] mt-[5vh]">      
            <motion.div 
              className="text-black text-[1.8vh]"
              whileHover={{ scale: 1.1 }}
            >
              PREV
            </motion.div>
            <motion.div 
              className="text-[#e22f5b] text-[1.8vh]"
              whileHover={{ scale: 1.1 }}
            >
              NEXT
            </motion.div>
          </div>

          <motion.div 
            className="w-[60vw] h-[60vh] absolute bottom-[26vh] z-10 ml-[25vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <img src="controller.svg"></img>
          </motion.div>
          
          <motion.div 
            className="w-[35vw] h-[60vh] bg-[#e22f5b] absolute top-[18vh] ml-[54vw] rounded-tl-[5vh] rounded-bl-[5vh]"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <div className="text-white opacity-40 ml-[19vw] mt-[4vh] text-[8vh] font-mono">02</div>
            <div className="mt-[10vh] ml-[1vw]">
              <div className="w-[0.8vw] h-[1.6vh] border border-white rounded-[2vh] ml-[31vw] bg-white opacity-40"></div>
              <div className="w-[0.8vw] h-[1.6vh] border border-white rounded-[2vh] ml-[31vw] mt-[0.5vh] bg-white"></div>
              <div className="w-[0.8vw] h-[1.6vh] border border-white rounded-[2vh] ml-[31vw] mt-[0.5vh] bg-white opacity-40"></div>
              <div className="w-[0.8vw] h-[1.6vh] border border-white rounded-[2vh] ml-[31vw] mt-[0.5vh] bg-white opacity-40"></div>
            </div>
            <img src="circle.svg" className="mt-[12vh] ml-[20vw] h-[7vh] "></img>
            <img src="plus.svg" className="top-[47.5vh] ml-[20.7vw] absolute h-[4vh]"></img>
            <div className="text-white ml-[19.3vw] mt-[1vh] absolute text-[2vh] opacity-75">Add To Cart</div>
            <img src="twitter.svg" className="top-[64vh] ml-[20vw] h-[2vh] absolute"></img>
            <img src="instagram.svg" className="top-[64vh] ml-[24vw] h-[2vh] absolute"></img>
            <img src="facebook.svg" className="top-[64vh] ml-[28vw] h-[2vh] absolute "></img>
          </motion.div>

          <div className="flex space-x-[1vw] ml-[43vw] mt-[3vh] h-[2vh]">
            <div className="w-[0.8vw] h-[1.6vh] rounded-[2vh] bg-[#e22f5b]"></div>
            <div className="w-[0.8vw] h-[1.6vh] rounded-[2vh] bg-[#1796CC]"></div>
            <div className="w-[0.8vw] h-[1.6vh] rounded-[2vh] bg-[#FFCC17]"></div>
            <div className="w-[0.8vw] h-[1.6vh] rounded-[2vh] bg-[#1DD100]"></div>
            <div className="w-[0.8vw] h-[1.6vh] rounded-[2vh] bg-[#B50000]"></div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
