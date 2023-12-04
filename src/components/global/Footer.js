export default function Footer(){
    const tahun = new Date().getFullYear()
    return (
        <footer>
            <p>{tahun}</p>
        </footer>
    );
}