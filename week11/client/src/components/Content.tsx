import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export default function Content() {
    const { isLight, light, dark } = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    return (
        <div className="content" style={{ background: theme.ui, color: theme.text }}>
            <h1>Content</h1>
        </div>
    )
}