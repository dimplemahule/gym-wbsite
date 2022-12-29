import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
import { AiOutlineLinkedin } from "react-icons/ai"
import { ImMail } from "react-icons/im"
import styled from "styled-components";


const Footer = () => {
  return (
    <Wrapper>
      <section>
        <footer>
          <div className="contact-footer">
            <h3> Follow Us</h3>
            <div className="social-icons">
              <div>
              <a href="https://www.facebook.com/profile.php?id=100088275241700" >
            <AiFillFacebook className="icons" />
            </a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/lalita-mahule-0289b0184/" >
            < AiOutlineLinkedin className="icons"/>
            </a>
            </div>
            <div>
            <a href="https://twitter.com/i/flow/login" >
              <AiFillTwitterSquare className="icons" />
              </a>
            </div>
            <div> 
              <a href="https://support.google.com/mail/answer/8494?hl=en&co=GENIE.Platform%3DDesktop" >
              < ImMail className="icons" />
              </a>
              </div>
           <div>
            <a href="https://www.youtube.com/watch?v=VrQgmNY96wo&t=5579s" >
            <AiFillYoutube className="icons" />
            </a>
            </div>
            
            </div>
          </div>
        </footer>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.contact-footer{
  margin:auto;
  padding:3rem 3rem 3rem 3rem;
  align-self:center;
  align:center
  
}

footer{
  padding:1rem 0 0rem 0;
  background-color:pink
}
.social-icons{
  display:flex;
  gap:1.5rem;
}
div{
  padding:1rem;
  border-redius:50%;
  border:2px;
}
.icons{
  font-size:2.4rem;
  position:relative;
  cursor:pointer;
}
`;

export default Footer;

