export default function Footer() {
  return (
    <footer className="py-10 bg-gray-900 text-gray-300">
      <div className="w-11/12 md:w-5/6 mx-auto flex flex-col flex-wrap sm:flex-row items-center justify-between">
        <div className="text-lg tracking-wide">
          <p>
            Copyrights &copy;{' '}
            <span className="font-bold text-main">
              <a href="#">Addie Productions</a>
            </span>
          </p>
        </div>
        <p className="text-sm tracking-wider">
          Designed by:{' '}
          <a href="https://github.com/TheBoringDude" className="underline">
            @TheBoringDude
          </a>
        </p>
      </div>
    </footer>
  )
}
