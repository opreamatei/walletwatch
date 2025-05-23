import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="fixed -translate-x-1/2 left-1/2 px-20 rounded-xl border border-white/10 top-6 w-[90%] bg-gray-100/30 backdrop-blur-xl max-w-6xl">

            <div className="flex justify-between items-center w-full rounded-xl p-3 shadow-md transition-shadow duration-300">
                <Link href="/">
                    <h2 className="text-base font-semibold text-text-primary">Wallet Watch</h2>
                </Link>

                <Link href="/tutorial">
                    <h2 className="text-base font-semibold text-text-primary">Tutorial</h2>
                </Link>


                <div className="flex items-center space-x-3">
                    <button className="py-1.5 px-3 bg-[#28a745] text-white text-sm rounded-md hover:bg-green-700 transition-colors duration-200">
                        log in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
