export default function AppMenu() {
  return (
    <nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="createCard" className="text-gray-900 dark:text-white hover:underline" aria-current="page">createCard</a>
                </li>
                <li>
                    <a href="cards/MyCards" className="text-gray-900 dark:text-white hover:underline">MyCards</a>
                </li>
                <li>
                    <a href="mySculptureList" className="text-gray-900 dark:text-white hover:underline">mySculptureList</a>
                </li>
                <li>
                    <a href="mySculptureListB" className="text-gray-900 dark:text-white hover:underline">mySculptureListB</a>
                </li>
                <li>
                    <a href="SculptureList" className="text-gray-900 dark:text-white hover:underline">SculptureList</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  );
}
