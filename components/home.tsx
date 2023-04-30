import HomePageLeft from "./homeleft"

const HomePage = () => {
    return (
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
            <div className="hidden xl:inline-flex w-32 h-full fixed bottom-0">
                <HomePageLeft/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default HomePage