import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <form className='flex justify-center items-center gap-5' action="">
            <motion.input
              className='shadow-lg shadow-slate-500/25 rounded h-10 w-72 px-5 focus:outline-none focus:shadow-blue-400/50'
              type="text"
              initial={{width: '18rem'}}
              whileFocus={{ width: '24rem'}}
              transition={{ type: 'tween', damping: 10, stiffness: 100 }}
            />
          <button className='shadow-lg border border-blue-400 text-blue-600 rounded h-10 px-5 font-bold hover:bg-blue-400 hover:text-white'>
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
