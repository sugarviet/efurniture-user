function useScroll() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return { handleScrollToTop };
}

export default useScroll;