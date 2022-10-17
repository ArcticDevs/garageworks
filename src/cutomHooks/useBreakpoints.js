import { useEffect, useState } from "react";

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);

        const handler = (event) => setMatches(event.matches);

        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, [query]);

    return matches;
}

export default function useBreakpoints() {

    const breakpoints = {
        isXs: useMediaQuery("(max-width: 500px)"),
        isSm: useMediaQuery("(max-width: 600px)"),
        isTm: useMediaQuery("(max-width: 700px)"),
        isMd: useMediaQuery("(max-width: 800px)"),
        isLg: useMediaQuery("(max-width: 900px)"),
        isXl: useMediaQuery("(max-width: 1010px)"),
        isXX: useMediaQuery("(max-width: 1280px)"),
    };

    return breakpoints;
}