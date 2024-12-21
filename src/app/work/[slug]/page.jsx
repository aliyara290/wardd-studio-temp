import {Hero, Details, Video, Banner, Richtext, Mockups, Footer} from '@/components/work/project/index';

const project = () => {
  return (
    <div className="page__conten">
         <Hero/>
         <Details/>
         <Video/>
         <Richtext/>
         <Banner/>
         <Richtext/>
         <Mockups/>
         <Footer/>
    </div>
  )
}

export default project;