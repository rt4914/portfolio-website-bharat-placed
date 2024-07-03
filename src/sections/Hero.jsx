import BoyGraphic from '../assets/boy.svg'
import DiscordIcon from '../assets/discord.svg'
import RedditIcon from '../assets/reddit.svg'
import TwitterIcon from '../assets/twitter.svg'
import SocialButton from '../components/SocialButton'

const socialLinks = [
  {
    icon: TwitterIcon,
    link: "https://twitter.com"
  },
  {
    icon: RedditIcon,
    link: "https://reddit.com"
  },
  {
    icon: DiscordIcon,
    link: "https://discord.com"
  },
  {
    icon: TwitterIcon,
    link: "https://twitter.com"
  },
]

const Hero = () => {
  return (
    <div className="px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col lg:flex-row-reverse md:justify-between items-center gap-5 lg:gap-10">
        <img src={BoyGraphic} />
        <div className="space-y-5">
          <h1 className="font-sora text-5xl leading-[56px] text-black">
            Hello I&apos;am <span className="font-extrabold">Rajat Talesra.</span>
          </h1>
          <h2 className="font-sora text-5xl leading-[56px] text-black">
            <span className="font-extrabold">Frontend</span> Developer
          </h2>
          <h2 className="font-sora text-5xl leading-[56px] text-black">
            Based In <span className="font-extrabold">India.</span>
          </h2>
          <p className="text-zinc-500 font-display py-4">
            I&apos;m Rajat Talesra Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
          </p>

          <div className='flex gap-8 items-center'>
            { socialLinks.map((socialItem) => {
              return (
                <SocialButton 
                  key={socialItem.link} 
                  icon={socialItem.icon} 
                  link={socialItem.link} 
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
