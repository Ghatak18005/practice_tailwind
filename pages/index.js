import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      <div className="bg-black h-screen">
        <motion.div 
          className="border-amber-400 border-solid border-[1vh] rounded-[10vh] sm:w-[90vw] md:w-[90vw] sm:h-[80vh] md:h-[90vh] sm:mt-[10vh] md:mt-[5vh] sm:ml-[5vw] md:ml-[5vw] absolute bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        > 
          <div className="flex sm:ml-[5vw] md:ml-[5vw] sm:mt-[3vh] md:mt-[3vh] sm:space-x-[0.5vh] md:space-x-[1vh]">
            <motion.img 
              className="sm:w-[2vw] md:w-[2vw] sm:h-[5vh] md:h-[5vh]" 
              src="/text.svg"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />   
            <motion.img 
              className="sm:w-[7vw] md:w-[8vw] sm:h-[5vh] md:h-[5vh]" 
              src="textimg.svg"
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />       
          </div>

          <motion.div 
            className="sm:mt-[1vh] md:mt-[2.4vh] sm:text-[1.2vh] md:text-[2vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <nav className="text-black flex sm:text-[1.5vh] md:text-[2vh] sm:space-x-[2vh] md:space-x-[6vh] sm:ml-[20vw] md:ml-[26vw] sm:-mt-[4.6vh] md:-mt-[6.5vh]">
              <ul className="text-[#EC368D]">GAME CONTROLLERS</ul>
              <ul>VR ACCESSORIES</ul>
              <ul>MEDIA REMOTES</ul>
              <ul>OTHERS</ul>
            </nav>
            <div className="flex sm:space-x-[2vh] md:space-x-[4vh] sm:ml-[73vw] md:ml-[76vw] sm:-mt-[2.6vh] md:-mt-[3.6vh]">
              <img className="sm:w-[2vw] md:w-[1.5vw] sm:h-[3vh] md:h-[3vh]" src="search.svg"></img>
              <img className="sm:w-[2vw] md:w-[1.5vw] sm:h-[3vh] md:h-[3vh]" src="bar.svg"></img>
              <img className="sm:w-[2vw] md:w-[1.5vw] sm:h-[3vh] md:h-[3vh]" src="bag.svg"></img>
            </div>
          </motion.div>

          <div className="border-[#e22f5b] border-solid border-[1vh] sm:h-[20vh] md:h-[25vh] sm:w-[1vw] md:w-[0.1vw] absolute sm:mt-[21vh] md:mt-[25vh] sm:ml-[5vw] md:ml-[8vw]"></div>
          
          <motion.div 
            className="sm:mt-[23vh] md:mt-[26vh] sm:ml-[9vw] md:ml-[12vw] font-mono sm:size-[18vw] md:size-[18vw] relative font-bold sm:text-[3vh] md:text-[5vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            PS4 V2 DualShock 4
          </motion.div>
          
          <motion.div 
            className="sm:w-[22vw] md:w-[22vw] font-mono sm:top-[40vh] md:top-[49vh] sm:ml-[9vw] md:ml-[12vw] absolute opacity-75 sm:text-[1.5vh] md:text-[2vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Wireless Controller For PlayStation 4 (CompatibilityCentric)
          </motion.div>
          
          <motion.div 
            className="sm:w-[2vh] font-mono font-bold sm:top-[48vh] md:top-[57vh] sm:ml-[9vw] md:ml-[12vw] absolute sm:text-[2.5vh] md:text-[3vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            ₹4,000
          </motion.div>
          
          <motion.div 
            className="sm:h-[4vh] md:h-[7.5vh] sm: w-[12vh] md:w-[18vw] bg-[#e22f5b] sm:rounded-[2vh] md:rounded-[5vh] sm: ml-[11vh] md:ml-[11.5vw] sm:top-[58vh] md:top-[70vh] absolute text-center text-white sm: text-xs md:text-lg"
            whileHover={{ scale: 1.1 }} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}}
          >
            <div className="flex items-center justify-center h-full">
              <div className=" flex flex-row items-center">
                <span className="sm:text-[1.2vh] md:text-[2.5vh]">BUY NOW</span>
                <span className="sm:text-[3vh] md:text-[6vh] sm:mb-[0.5vh] md:mb-[1vh] sm:ml-[0.5vw] md:ml-[1vw]">&rarr;</span>
              </div>
            </div>
          </motion.div>

          <div className="sm:flex md:flex sm:space-x-[5vh] md:space-x-[6vh] sm:ml-[10vw] md:ml-[12vw] sm:mt-[5vh] md:-mt-[6vh]">      
            <motion.div 
              className="text-black sm:text-[1.6vh] md:text-[1.8vh]"
              whileHover={{ scale: 1.1 }}
            >
              PREV
            </motion.div>
            <motion.div 
              className="text-[#e22f5b] sm:text-[1.6vh] md:text-[1.8vh]"
              whileHover={{ scale: 1.1 }}
            >
              NEXT
            </motion.div>
          </div>

          <motion.div 
            className="sm:w-[60vw] sm:h-[60vh] md:w-[60vw] h-[60vh] absolute sm:top-[21vh] md:top-[2vh] z-10 sm:ml-[25vw] md:ml-[25vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <img src="controller.svg"></img>
          </motion.div>
          
          <motion.div 
            className="sm:w-[34.2vw] md:w-[35vw] sm:h-[50vh] md:h-[60vh] bg-[#e22f5b] absolute sm:top-[19vh] md:top-[18vh] sm:ml-[54vw] md:ml-[54vw] rounded-tl-[5vh] rounded-bl-[5vh]"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <div className="text-white opacity-40 sm:ml-[16vw] md:ml-[19vw] sm:mt-[1vh] md:mt-[2vh] sm:text-[5vh] md:text-[9vh] font-mono">02</div>
            <div className="sm:mt-[12vh] md:mt-[10vh] sm:ml-[1vw] md:ml-[1vw]">
              <div className="sm:w-[1vw] md:w-[0.8vw] sm:h-[1vh] md:h-[1.6vh] border border-white rounded-[2vh] ml-[31vw] bg-white opacity-40"></div>
              <div className="sm:w-[1vw] md:w-[0.8vw] sm:h-[1vh] md:h-[1.6vh] border border-white rounded-[2vh] ml-[31vw] mt-[0.5vh] bg-white"></div>
              <div className="sm:w-[1vw] md:w-[0.8vw] sm:h-[1vh] md:h-[1.6vh] border border-white rounded-[2vh] ml-[31vw] mt-[0.5vh] bg-white opacity-40"></div>
              <div className="sm:w-[1vw] md:w-[0.8vw] sm:h-[1vh] md:h-[1.6vh] border border-white rounded-[2vh] ml-[31vw] mt-[0.5vh] bg-white opacity-40"></div>
            </div>
            <img src="circle.svg" className="sm:mt-[15vh] md:mt-[14vh] sm:ml-[16vw] md:ml-[20vw] sm:h-[5vh] md:h-[7vh] "></img>
            <img src="plus.svg" className="sm:top-[42vh] md:top-[48.8vh] sm:ml-[17vw] md:ml-[20.7vw] absolute sm:h-[3vh] md:h-[4vh]"></img>
            <div className="text-white sm:ml-[14.5vw] md:ml-[19.3vw] sm:mt-[0.5vh] md:mt-[1vh] absolute sm:text-[1.5vh] md:text-[2vh] sm:opacity-75 md:opacity-75">Add To Cart</div>
            <img src="twitter.svg" className="sm:top-[54vh] md:top-[64vh] sm:ml-[16vw] md:ml-[20vw] sm:h-[2vh] md:h-[2vh] absolute"></img>
            <img src="instagram.svg" className="sm:top-[54vh] md:top-[64vh] sm:ml-[20vw] md:ml-[24vw] sm:h-[2vh] md:h-[2vh] absolute"></img>
            <img src="facebook.svg" className="sm:top-[54vh] md:top-[64vh] sm:ml-[24vw] md:ml-[28vw] sm:h-[2vh] md:h-[2vh] absolute"></img>
          </motion.div>

          <div className="flex space-x-[1vw] sm:ml-[40vw] md:ml-[43vw] sm:mt-[18vh] md:mt-[18vh] sm:h-[1vh] md:h-[2vh]">
            <div className="sm:w-[0.8vw] md:w-[0.8vw] sm:h-[0.8vh] md:h-[1.6vh] rounded-[2vh] bg-[#e22f5b]"></div>
            <div className="sm:w-[0.8vw] md:w-[0.8vw] sm:h-[0.8vh] md:h-[1.6vh] rounded-[2vh] bg-[#1796CC]"></div>
            <div className="sm:w-[0.8vw] md:w-[0.8vw] sm:h-[0.8vh] md:h-[1.6vh] rounded-[2vh] bg-[#FFCC17]"></div>
            <div className="sm:w-[0.8vw] md:w-[0.8vw] sm:h-[0.8vh] md:h-[1.6vh] rounded-[2vh] bg-[#1DD100]"></div>
            <div className="sm:w-[0.8vw] md:w-[0.8vw] sm:h-[0.8vh] md:h-[1.6vh] rounded-[2vh] bg-[#B50000]"></div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
