import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { CSSTransition } from 'react-transition-group'

import { useNavSignal, ContextType } from "../../components/nav/Nav"


const Projects = () => {
    const { nav, reactiveFunc }: ContextType = useNavSignal()
    const location = useLocation()
    const refContainer = useRef<HTMLHeadElement>(null)
    const [sectionState, setSectionState] = useState(false)

    useEffect(() => {
        showContent()
    }, [])

    useEffect(() => {
        if (nav) {
            if (nav.to != location.pathname) {
                hideContent()
            }
        }
    }, [nav])

    const showContent = () => {
        setSectionState(true)
    }

    const hideContent = () => {
        setSectionState(false)
    }

    return (
        <CSSTransition in={sectionState} nodeRef={refContainer} timeout={350} classNames="page" mountOnEnter unmountOnExit onExited={() => reactiveFunc(true)}>
            <header ref={refContainer}>
                <h1>Projects section</h1>

                <hr />

                <h2>section 1</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, mollitia obcaecati. Quidem eveniet earum similique
                    cupiditate natus dicta dolorem libero officiis, incidunt
                    laborum commodi delectus dignissimos saepe adipisci fugiat provident?
                </p>

                <hr />

                <h2>section 2</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis, quia id pariatur ducimus sapiente natus ut quas! Commodi, ad fugit dolorem itaque aliquam cumque dolor soluta id quasi nobis quam vel iure saepe magnam nihil architecto officiis nisi quo doloremque, unde beatae eos. Obcaecati ea ex distinctio nobis, numquam mollitia? Ad, pariatur quia natus, nam vitae laudantium eveniet odit ut nemo atque repudiandae porro harum repellat? Veniam quisquam rerum maiores quas impedit officia voluptatem natus facilis iste maxime accusantium deserunt minima iure ipsum, provident tempore, optio beatae! Similique sit atque voluptate rem. Fugiat officia similique numquam? Officiis, cupiditate sunt odit animi, a quae voluptates fugit repudiandae placeat, facilis quos vitae deserunt nemo nobis natus laboriosam dolore facere aliquam. Eius dicta ipsam suscipit quasi mollitia, deleniti et beatae perferendis eum quaerat accusamus nulla laborum iusto enim commodi? Neque dicta, explicabo asperiores laudantium ut tenetur. Veniam laudantium accusamus non veritatis! Magnam ipsum incidunt quis cumque culpa illo, placeat dolor adipisci repellat tempora aliquam eos modi alias consectetur eius illum dolorum aperiam quod sunt voluptatem reprehenderit tempore. Aliquid, et tenetur? Aliquam vel ab sed earum iure. Unde libero deserunt, dolor explicabo impedit sed ipsum necessitatibus nobis eligendi repellat, voluptate aliquam? Alias totam commodi ex eveniet quibusdam architecto harum, consequuntur facilis explicabo expedita velit eaque accusamus quas non quis possimus eum voluptatem cupiditate iusto nisi quisquam reprehenderit. Voluptates perferendis voluptatem fugiat perspiciatis eligendi optio? Dolorum deserunt placeat ratione beatae maiores rerum? Aut voluptates eum quaerat natus ex eos repudiandae architecto ratione cum neque, libero id et corrupti explicabo, eius suscipit esse tempore porro molestiae amet. Numquam repudiandae molestias quos facere repellat dolorem laborum? Quod quibusdam dolorem distinctio voluptatum repellat et, eligendi quisquam cumque cupiditate tempora dicta tempore eaque sunt eum eveniet ducimus accusantium, earum doloribus in porro iure. Id adipisci aut voluptatem vel cupiditate laudantium sequi. Enim cumque praesentium repellat culpa explicabo ipsa tempore optio officiis iste. Aliquam maiores id voluptas perspiciatis magni expedita iste repellat ipsa nesciunt reprehenderit temporibus, excepturi saepe sunt commodi corporis possimus optio cum aut facilis explicabo quibusdam. Voluptas aliquid minus earum vitae asperiores. Perspiciatis qui dolorum pariatur aut. Nostrum, suscipit rem quos aliquid accusamus asperiores porro fugit quae tenetur possimus dignissimos velit odit praesentium excepturi. Omnis quam voluptas mollitia corrupti ipsam excepturi obcaecati assumenda ullam, quaerat facere praesentium id delectus? Sapiente rerum nam facere vitae explicabo quia esse mollitia eveniet totam commodi aspernatur impedit reiciendis quidem, asperiores consectetur reprehenderit corporis ratione repellat magnam dolores vel? Sequi ipsa aliquam dolorem? Fugiat totam culpa dolorum a id placeat accusamus ducimus consectetur maxime atque, saepe fugit fuga praesentium perferendis, nobis eum perspiciatis sapiente reiciendis, ratione eveniet nostrum distinctio. Dolores, sint omnis quibusdam sequi iste earum doloribus eveniet recusandae asperiores expedita ex perspiciatis, quod quas, natus magni eaque dolore eos corporis? Rerum dolore amet minima repellat, a possimus, obcaecati deserunt tempora corrupti necessitatibus quasi maxime reprehenderit perferendis fugiat corporis quam provident sapiente, ex tenetur alias! Impedit blanditiis ex ipsam, suscipit omnis inventore. Autem vero odio quod porro. Ipsam qui possimus, facilis error, repudiandae labore quae, aliquid aspernatur beatae molestiae eius aut illo rem at ex sed quibusdam ullam voluptatem quidem ratione necessitatibus maxime. Nesciunt alias accusantium, magnam optio numquam officiis illum voluptates iusto, rem dolorem aliquid. Officiis sunt ipsum voluptatibus quam nisi praesentium nostrum porro? Quia laboriosam sequi iure in atque odit et asperiores distinctio adipisci nam quisquam provident ducimus, culpa veniam aliquam dolore corrupti soluta pariatur ipsum tempora eveniet. Eveniet nostrum beatae enim culpa, iusto aperiam! Perferendis, modi praesentium! Eius provident unde vero eos, aspernatur consequatur eaque exercitationem, earum deleniti autem cupiditate! Pariatur nemo neque suscipit. Repudiandae quae natus magni minima voluptatem porro quod, repellat quisquam sed praesentium illo, mollitia nihil nisi maxime sint laboriosam, dolorem dolorum reprehenderit molestiae voluptates necessitatibus rerum! Eum expedita deserunt, nesciunt quis quo quisquam repellat asperiores minima in, aliquid harum deleniti blanditiis repudiandae molestias incidunt unde veniam aliquam pariatur! Dolores maxime voluptates deserunt voluptatem, minus a debitis recusandae quia ducimus dolorem deleniti consectetur sunt modi beatae id placeat eveniet aut architecto! Atque alias ad suscipit tenetur consequuntur pariatur, est placeat maxime officia blanditiis distinctio corporis dolorum modi recusandae repellendus! Cupiditate minus ut eveniet, odit natus cum suscipit, voluptatum dignissimos consequatur et aspernatur quod molestias pariatur, unde voluptatem accusantium mollitia distinctio dolore non expedita recusandae optio tempora ipsam eos. In eius doloribus, quaerat facere quam totam ipsum cumque tempore voluptatibus harum neque? Hic explicabo odit porro reprehenderit vel deserunt perferendis sit, veritatis facere laborum officia error suscipit distinctio earum delectus voluptatibus fuga vero asperiores! Ratione illo aspernatur fuga itaque laboriosam omnis recusandae libero, consequuntur in praesentium accusantium natus deleniti expedita sunt tenetur laborum culpa cumque enim minus vero animi error mollitia! Enim id pariatur commodi magnam eaque, consequatur sed voluptatum ducimus quisquam nobis quibusdam error, odio quo quam fugit quia magni quos molestiae impedit! Atque, facere aliquam vero sunt nulla minus porro molestias tempore aspernatur, deleniti assumenda id architecto magnam culpa, voluptatum saepe. Cumque voluptates ducimus esse illo vel, numquam sequi recusandae voluptate, reprehenderit sunt ea ipsum architecto veritatis obcaecati asperiores deserunt. Sit laboriosam at commodi consequatur ab ea quas dolor odit. Maxime accusantium vel commodi blanditiis sapiente cum id explicabo magni dolor omnis dolores, hic eos consequuntur labore? At unde facilis nesciunt enim nisi minima aliquid voluptatem reiciendis maxime nemo consequatur aliquam repellat quia ipsam consectetur ducimus asperiores doloremque cupiditate iusto, vel veniam. Porro natus, laboriosam dignissimos inventore at eum voluptas! Eligendi consequatur sequi unde amet molestiae consectetur omnis eveniet possimus, quo, saepe voluptatem iure ipsam eos minus sint obcaecati vero facilis soluta numquam aliquid sit at. Similique adipisci ipsa officia nihil cumque iure ullam tenetur quaerat provident sunt perspiciatis libero aliquid odio harum voluptate natus doloribus ratione alias enim, pariatur fugit. Esse delectus necessitatibus odio voluptate provident illum fugiat deleniti, porro recusandae dicta cum, quia earum autem laborum. Aliquam repellat error optio velit hic minima ex amet illo saepe tenetur. Perferendis accusamus totam placeat aperiam repudiandae, esse veritatis blanditiis. Quo odit officia eos, necessitatibus consequuntur ipsam adipisci porro consectetur laudantium tenetur delectus, accusantium pariatur explicabo.
                </p>

            </header>
        </CSSTransition>
    )
}

export default Projects