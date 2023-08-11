
import {
  MetricsFactsCard,
  MetricsFactsContainer,
  MetricsFactsHeading,
  MetricsFactsItemContainer,
  MetricsFactsLogo,
  MetricsFactsLogoWrap,
  MetricsFactsRow,
  MetricsFactsSubtitle,
  MetricsFactsWrapper
} from './RelocationMetricsElements';

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}
const MetricsFacts = ({lightBg, id, imgStart, lightText, darkText, alt, primary, headline, headline2, headline3, logo8,
                      headline4, headline5, headline6, headline7, headline8, headline9, headline10, description, logo9,
                      description2, description3, description4, description5, description6, description7, description8, logo10,
                      description9, description10, divBg, buttonLabel, topLine, logo, logo2, logo3, logo4, logo5, logo6, logo7,}) => {

  return (
      
        <MetricsFactsContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <MetricsFactsWrapper>
                <MetricsFactsRow imgStart={imgStart}>
                  <MetricsFactsItemContainer>
                    <MetricsFactsCard>
                      <MetricsFactsLogoWrap>
                        <MetricsFactsLogo src={logo.default} />
                      </MetricsFactsLogoWrap>
                      <MetricsFactsHeading>{headline}</MetricsFactsHeading>
                      <MetricsFactsSubtitle>{description}</MetricsFactsSubtitle>
                    </MetricsFactsCard>
                  </MetricsFactsItemContainer>

                  <MetricsFactsItemContainer>
                    <MetricsFactsCard>
                      <MetricsFactsLogoWrap>
                        <MetricsFactsLogo src={logo2.default} />
                      </MetricsFactsLogoWrap>
                      <MetricsFactsHeading>{headline2}</MetricsFactsHeading>
                      <MetricsFactsSubtitle>{description2}</MetricsFactsSubtitle>
                    </MetricsFactsCard>
                  </MetricsFactsItemContainer>

                  <MetricsFactsItemContainer>
                    <MetricsFactsCard>
                      <MetricsFactsLogoWrap>
                        <MetricsFactsLogo src={logo3.default} />
                      </MetricsFactsLogoWrap>
                      <MetricsFactsHeading>{headline3}</MetricsFactsHeading>
                      <MetricsFactsSubtitle>{description3}</MetricsFactsSubtitle>
                    </MetricsFactsCard>
                  </MetricsFactsItemContainer>

                  <MetricsFactsItemContainer>
                    <MetricsFactsCard>
                      <MetricsFactsLogoWrap>
                        <MetricsFactsLogo src={logo4.default} />
                      </MetricsFactsLogoWrap>
                      <MetricsFactsHeading>{headline4}</MetricsFactsHeading>
                      <MetricsFactsSubtitle>{description4}</MetricsFactsSubtitle>
                    </MetricsFactsCard>
                  </MetricsFactsItemContainer>

                  <MetricsFactsItemContainer>
                    <MetricsFactsCard>
                      <MetricsFactsLogoWrap>
                        <MetricsFactsLogo src={logo5.default} />
                      </MetricsFactsLogoWrap>
                      <MetricsFactsHeading>{headline5}</MetricsFactsHeading>
                      <MetricsFactsSubtitle>{description5}</MetricsFactsSubtitle>
                    </MetricsFactsCard>
                  </MetricsFactsItemContainer>

                  <MetricsFactsItemContainer>
                    <MetricsFactsCard>
                      <MetricsFactsLogoWrap>
                        <MetricsFactsLogo src={logo6.default} />
                      </MetricsFactsLogoWrap>
                      <MetricsFactsHeading>{headline6}</MetricsFactsHeading>
                      <MetricsFactsSubtitle>{description6}</MetricsFactsSubtitle>
                    </MetricsFactsCard>
                  </MetricsFactsItemContainer>

                  <MetricsFactsItemContainer>
                    <MetricsFactsCard>
                      <MetricsFactsLogoWrap>
                        <MetricsFactsLogo src={logo7.default} />
                      </MetricsFactsLogoWrap>
                      <MetricsFactsHeading>{headline7}</MetricsFactsHeading>
                      <MetricsFactsSubtitle>{description7}</MetricsFactsSubtitle>
                    </MetricsFactsCard>
                  </MetricsFactsItemContainer>

                  <MetricsFactsItemContainer>
                    <MetricsFactsCard>
                      <MetricsFactsLogoWrap>
                        <MetricsFactsLogo src={logo8.default} />
                      </MetricsFactsLogoWrap>
                      <MetricsFactsHeading>{headline8}</MetricsFactsHeading>
                      <MetricsFactsSubtitle>{description8}</MetricsFactsSubtitle>
                    </MetricsFactsCard>
                  </MetricsFactsItemContainer>

                  <MetricsFactsItemContainer>
                    <MetricsFactsCard>
                      <MetricsFactsLogoWrap>
                        <MetricsFactsLogo src={logo9.default} />
                      </MetricsFactsLogoWrap>
                      <MetricsFactsHeading>{headline9}</MetricsFactsHeading>
                      <MetricsFactsSubtitle>{description9}</MetricsFactsSubtitle>
                    </MetricsFactsCard>
                  </MetricsFactsItemContainer>

                  <MetricsFactsItemContainer>
                    <MetricsFactsCard>
                      <MetricsFactsLogoWrap>
                        <MetricsFactsLogo src={logo10.default} />
                      </MetricsFactsLogoWrap>
                      <MetricsFactsHeading>{headline10}</MetricsFactsHeading>
                      <MetricsFactsSubtitle>{description10}</MetricsFactsSubtitle>
                    </MetricsFactsCard>
                  </MetricsFactsItemContainer>
                </MetricsFactsRow>
            </MetricsFactsWrapper>

            </MetricsFactsContainer>  
            
      
  )
}

export default MetricsFacts
