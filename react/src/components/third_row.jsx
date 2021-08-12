import {Slideshow} from "./slideshow";
import NewList_grid from "../images/NewList_grid.png";
import NewList_2 from "../images/NewList_2.png";
import NewList_3 from "../images/NewList_3.png";
import D_NewList_grid from "../images/D_NewList_grid.png";
import {Third_Column} from "./third_column";

export const Third_row = (props) => {
    return (
          <section className="third">
              <div className="third_row ">
                  <div className="column third_space_end"></div>
                  <div className="column third_space"></div>
                  <Third_Column
                    title={props.data ? props.data.title1 : 'Loading'}
                    subtitle1={props.data ? props.data.subtitle1_1 : 'Loading'}
                    subtitle2={props.data ? props.data.subtitle1_2 : ''}
                    img={NewList_grid}
                  />
                  <div className="column third_space"></div>
                  <Third_Column
                      title={props.data ? props.data.title2 : 'Loading'}
                      subtitle1={props.data ? props.data.subtitle2_1 : 'Loading'}
                      subtitle2={props.data ? props.data.subtitle2_2 : ''}
                      img={NewList_2}
                  />
                  <div className="column third_space"></div>
                  <Third_Column
                      title={props.data ? props.data.title3 : 'Loading'}
                      subtitle1={props.data ? props.data.subtitle3_1 : 'Loading'}
                      subtitle2={props.data ? props.data.subtitle3_2 : ''}
                      img={NewList_3}
                  />
                  <div className="column third_space"></div>
                  <Third_Column
                      title={props.data ? props.data.title4 : 'Loading'}
                      subtitle1={props.data ? props.data.subtitle4_1 : 'Loading'}
                      subtitle2={props.data ? props.data.subtitle4_2 : ''}
                      img={D_NewList_grid}
                  />
                  <div className="column third_space"></div>
                  <div className="column third_space_end"></div>
              </div>

              <Slideshow data={props.data}/>
          </section>
    );
}