import { FooterStyle } from './css/footerStyle'
import LogoFooter from '../../assets/footer/logoFooter'

export function Footer() {
    return(
        <FooterStyle>
            <footer>
                <div className="footerLeftSide">
                    <span>SÓ QUEM VENDE CURTE AS <br/>EXPERIÊNCIAS MAIS DIFERENTONAS!</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse modi maiores animi debitis distinctio temporibus, numquam nam iusto dolore vitae voluptatibus at soluta. Eius aut nisi sint. Nesciunt, iste! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit officiis reprehenderit obcaecati quis voluptas sed, nemo praesentium animi autem blanditiis eligendi dolorum facilis eveniet at, veniam nam unde. Excepturi, repellendus?</p>
                </div>
                <div className="footerRightSide">
                    <LogoFooter />
                </div>
            </footer>
            <div className="footerBar">
                <div className="footerBarBg">
                    <span>Duvidas? Envie um email para <a>atendimento@umbrindenaeuropa.com.br</a></span>
                    <span>Imagens meramente ilustrativas. Promoção válida de 01/02 a 31/03/2020.</span>
                </div>   
            </div>
        </FooterStyle>

    )
}