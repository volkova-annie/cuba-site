import React, {Component} from 'react'
import Link from 'gatsby-link'
import {connectComponent} from '../state/connectComponent'
import CarouselWidget from '../components/CarouselWidget'
import PageLayout from '../components/PageLayout'
import Actions from '../components/Actions'
import { filterLocales } from '../modules/locales'
import PhotoCollage from '../components/PhotoCollage'
import Poster from '../components/Poster'
import st from '../pages/style.module.css'

const leftPad = require('left-pad')

class IndexPage extends Component {
  render() {
    const {data: {events, menu, gallery, slider}} = this.props.pathContext
    const locale = this.props.locale
    const t = this.props.actions.translate

    return (
      <PageLayout
        {...this.state}
        {...this.props}>
        <CarouselWidget
          locale={locale}
          pictures={slider} />
        <Actions {...this.props} />
        <h2 className={st.heading}>{t({ ru: 'О Кубе', en: 'About Cuba' })}</h2>
        <p
          className={st.text}
          dangerouslySetInnerHTML={{
            __html: t({
              ru: `Russian Lorem ipsum dolor sit amet, veniam expetenda intellegebat quo&nbsp;et, mel ei&nbsp;nostro volutpat facilisis. Pro eros solet ornatus&nbsp;ea. Mel graecis commune maluisset&nbsp;cu, illum iuvaret principes eam&nbsp;in, an&nbsp;qui nisl justo neglegentur. Cum at&nbsp;mentitum accommodare.
Et&nbsp;tota falli epicurei per, ea&nbsp;tibique ponderum eam. Usu te&nbsp;causae impedit, idque vitae vis&nbsp;ea. Ne&nbsp;mutat putant habemus cum. Duo bonorum laoreet&nbsp;ex. Veri facilisis accusamus vis&nbsp;ex, ad&nbsp;est cetero audiam democritum. Ea&nbsp;vel admodum accusamus, an&nbsp;vim virtute repudiandae, dico dignissim sit&nbsp;te. Mei putent probatus&nbsp;cu.
Simul altera nostrud mel&nbsp;et, ex&nbsp;delenit laoreet quo, mundi facilis vivendum vim&nbsp;ex. Qui id&nbsp;commune consulatu urbanitas. Usu cu&nbsp;vocent impetus aliquando, nonumy petentium consequuntur eu&nbsp;eam. Et&nbsp;his primis sensibus torquatos, audire epicuri id&nbsp;per. Ei&nbsp;ius civibus accusata constituam, est et&nbsp;vivendo consetetur.
Id&nbsp;ius atqui populo, cu&nbsp;saperet suscipit copiosae mei. Vis no&nbsp;debet erant moderatius, augue inermis docendi at&nbsp;mei. Mel autem idque menandri&nbsp;et. Duo dictas alterum&nbsp;at.
Idque molestiae his&nbsp;ut, an&nbsp;mel corrumpit voluptatum. No&nbsp;pri hendrerit inciderint, eu&nbsp;mazim tempor efficiendi ius. Eu&nbsp;case ferri autem mel, mea lucilius incorrupte neglegentur&nbsp;ut. Ne&nbsp;mel nibh semper latine, vero doming eam&nbsp;ad, iudico melius eu&nbsp;sea. Nam graece dolorem mandamus&nbsp;ea.
Usu te&nbsp;evertitur vulputate. Eu&nbsp;quaeque efficiantur eos. Cu&nbsp;dolorem iracundia gloriatur quo. Ad&nbsp;augue virtute vel, ius cu&nbsp;dicam animal, cum tota aeque&nbsp;ne.
Duo ei&nbsp;sale nonumes. Qui ad&nbsp;congue admodum. Utroque laoreet similique ei&nbsp;per, altera scripta admodum qui&nbsp;no, ut&nbsp;aliquam molestie ius. Dolore ubique ei&nbsp;mei. Legere viderer vim&nbsp;et. Eum id&nbsp;voluptatum delicatissimi.
Ne&nbsp;choro nominati vim. An&nbsp;vix omnes feugiat senserit, eos amet patrioque gubergren&nbsp;ei, laboramus conclusionemque nam&nbsp;et. Nec ad&nbsp;veri doming admodum, suas augue movet vix&nbsp;at, in&nbsp;brute reprehendunt mea. Duo ad&nbsp;brute dicit reprimique, malis consetetur an&nbsp;ius.`,
              en: `English Lorem ipsum dolor sit amet, veniam expetenda intellegebat quo&nbsp;et, mel ei&nbsp;nostro volutpat facilisis.
Pro eros solet ornatus&nbsp;ea. Mel graecis commune maluisset&nbsp;cu, illum iuvaret principes eam&nbsp;in, an&nbsp;qui nisl justo neglegentur.
Cum at&nbsp;mentitum accommodare. Et&nbsp;tota falli epicurei per, ea&nbsp;tibique ponderum eam.
Usu te&nbsp;causae impedit, idque vitae vis&nbsp;ea. Ne&nbsp;mutat putant habemus cum. Duo bonorum laoreet&nbsp;ex.
Veri facilisis accusamus vis&nbsp;ex, ad&nbsp;est cetero audiam democritum. Ea&nbsp;vel admodum accusamus, an&nbsp;vim virtute repudiandae, dico dignissim sit&nbsp;te.
Mei putent probatus&nbsp;cu. Simul altera nostrud mel&nbsp;et, ex&nbsp;delenit laoreet quo, mundi facilis vivendum vim&nbsp;ex.
Qui id&nbsp;commune consulatu urbanitas. Usu cu&nbsp;vocent impetus aliquando, nonumy petentium consequuntur eu&nbsp;eam.
Et&nbsp;his primis sensibus torquatos, audire epicuri id&nbsp;per. Ei&nbsp;ius civibus accusata constituam, est et&nbsp;vivendo consetetur.
Id&nbsp;ius atqui populo, cu&nbsp;saperet suscipit copiosae mei. Vis no&nbsp;debet erant moderatius, augue inermis docendi at&nbsp;mei.
Mel autem idque menandri&nbsp;et. Duo dictas alterum&nbsp;at. Idque molestiae his&nbsp;ut, an&nbsp;mel corrumpit voluptatum.
No&nbsp;pri hendrerit inciderint, eu&nbsp;mazim tempor efficiendi ius. Eu&nbsp;case ferri autem mel, mea lucilius incorrupte neglegentur&nbsp;ut.
Ne&nbsp;mel nibh semper latine, vero doming eam&nbsp;ad, iudico melius eu&nbsp;sea. Nam graece dolorem mandamus&nbsp;ea.
Usu te&nbsp;evertitur vulputate. Eu&nbsp;quaeque efficiantur eos. Cu&nbsp;dolorem iracundia gloriatur quo. Ad&nbsp;augue virtute vel, ius cu&nbsp;dicam animal, cum tota aeque&nbsp;ne. Duo ei&nbsp;sale nonumes. Qui ad&nbsp;congue admodum.
Utroque laoreet similique ei&nbsp;per, altera scripta admodum qui&nbsp;no, ut&nbsp;aliquam molestie ius. Dolore ubique ei&nbsp;mei. Legere viderer vim&nbsp;et. Eum id&nbsp;voluptatum delicatissimi. Ne&nbsp;choro nominati vim. An&nbsp;vix omnes feugiat senserit, eos amet patrioque gubergren&nbsp;ei, laboramus conclusionemque nam&nbsp;et.
Nec ad&nbsp;veri doming admodum, suas augue movet vix&nbsp;at, in&nbsp;brute reprehendunt mea. Duo ad&nbsp;brute dicit reprimique, malis consetetur an&nbsp;ius.`,
            }),
          }} />
        <section className={st.section}>
          <h2 className={st.heading}>{t({ ru: 'Зажигательные Вечеринки', en: 'The Hottest Parties' })}</h2>
          <p className={st.section_description}>
            {
              t({
                ru: `RU-Mauris finibus cursus justo, sit amet eleifend libero gravida eget.
Aliquam lobortis, tortor ut lobortis bibendum, urna ante tristique odio, vel vestibulum turpis dolor non libero.`,
                en: `EN-Mauris finibus cursus justo, sit amet eleifend libero gravida eget.
Aliquam lobortis, tortor ut lobortis bibendum, urna ante tristique odio, vel vestibulum turpis dolor non libero.`,
              })
            }
          </p>
          <PhotoCollage
            t={t}
            locale={locale}
            rootPage={'events'}
            items={events} />
        </section>

        <section className={st.section}>
          <h2 className={st.heading}>{t({ ru: 'Вкуснейшие Блюда', en: 'Delicious dishes' })}</h2>
          <p className={st.section_description}>
            {
              t({
                ru: `RU - Donec vel euismod mi. Phasellus ultricies ex vitae lobortis posuere.
Vivamus et augue sodales, cursus nunc ac, porta tellus. Cras quis sem vel enim sagittis feugiat.`,
                en: `EN - Donec vel euismod mi. Phasellus ultricies ex vitae lobortis posuere.
Vivamus et augue sodales, cursus nunc ac, porta tellus. Cras quis sem vel enim sagittis feugiat.`,
              })
            }
          </p>
          <PhotoCollage
            t={t}
            locale={locale}
            rootPage={'menu'}
            items={menu} />
        </section>
      </PageLayout>
    )
  }
}

export default connectComponent(IndexPage)
