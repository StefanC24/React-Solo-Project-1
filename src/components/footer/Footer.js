import './Footer.css'

// TODO: This should be within the components folder
function Footer(){
    return(
        <div className='footer-container'>
            <p className='contact-paragraph'>Reach out to me</p>
            <a href="https://www.linkedin.com/in/stefan-cepeleaga-047633134/">
                <img src='linkedin logo.png' alt='Linkedin logo'></img>
            </a>
        </div>
    )
}
export default Footer