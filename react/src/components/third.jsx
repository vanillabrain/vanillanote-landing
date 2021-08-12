import {Slideshow} from "./slideshow";
import NewList_grid from "../images/NewList_grid.png";
import NewList_2 from "../images/NewList_2.png";
import NewList_3 from "../images/NewList_3.png";
import D_NewList_grid from "../images/D_NewList_grid.png";

export const Third = (props) => {
    return (
          <section className="third">
              <div className="third_row ">
                  <div className="column third_space_end"></div>
                  <div className="column third_space"></div>
                  <div className="column">
                      <p className="title">{props.data ? props.data.title1 : 'Loading'}</p>
                      <p className="subtitle">{props.data ? props.data.subtitle1_1 : 'Loading'}</p>
                      <p className="subtitle">{props.data ? props.data.subtitle1_2 : ''}</p>
                      <div className="third_images">
                          <img src={NewList_grid}
                          class="third_img">
                          </img>
                      </div>
                  </div>
                  <div className="column third_space"></div>
                  <div className="column">
                      <p className="title">{props.data ? props.data.title2 : 'Loading'}</p>
                      <p className="subtitle">{props.data ? props.data.subtitle2_1 : 'Loading'}</p>
                      <p className="subtitle">{props.data ? props.data.subtitle2_2 : ''}</p>
                      <div className="third_images">
                          <img src={NewList_2}
                          class="third_img">
                          </img>
                      </div>
                  </div>
                  <div className="column third_space"></div>
                  <div className="column">
                      <p className="title">{props.data ? props.data.title3 : 'Loading'}</p>
                      <p className="subtitle">{props.data ? props.data.subtitle3_1 : 'Loading'}</p>
                      <p className="subtitle">{props.data ? props.data.subtitle3_2 : ''}</p>
                      <div className="third_images">
                          <img src={NewList_3}
                          class="third_img">
                          </img>
                      </div>
                  </div>
                  <div className="column third_space"></div>
                  <div className="column">
                      <p className="title">{props.data ? props.data.title4 : 'Loading'}</p>
                      <p className="subtitle">{props.data ? props.data.subtitle4_1 : 'Loading'}</p>
                      <p className="subtitle">{props.data ? props.data.subtitle4_2 : ''}</p>
                      <div className="third_images">
                          <img src={D_NewList_grid}
                          class="third_img">
                          </img>
                      </div>
                  </div>
                  <div className="column third_space"></div>
                  <div className="column third_space_end"></div>
              </div>

              <Slideshow />
          </section>
    );
}