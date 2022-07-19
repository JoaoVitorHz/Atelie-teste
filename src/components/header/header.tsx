import { HeaderStyle } from './css/headerStyle'
import LogoHeader from '../../assets/header/logoHeader'
import clouds from '../../assets/header/clouds.png'

export function Header() {
    return(
        <HeaderStyle>
           <header>
                <div className="headerLeftSide">
                    <div className="headerItens">
                        <LogoHeader/>
                        <div className="headerButtons">
                            <button className="btnHeader">LOGIN</button>
                            <button className="btnHeader">CADASTRE-SE</button>
                        </div>
                    </div>
                </div>
                <div className="headerRightSide">
                    <img src={clouds} alt="" />
                </div>
           </header>
        </HeaderStyle>
    )
}