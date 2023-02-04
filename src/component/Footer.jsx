import react from "react";

function Footer() {
    const name = "Atanu Bera";
    const date = new Date();
    const Year = date.getFullYear();
    console.log(Year);

    return(
        <footer>
        <div>
        
        <p>Copyright © {Year} Atanu</p>
       </div>
       </footer>
        
    )
    
}

export default Footer;