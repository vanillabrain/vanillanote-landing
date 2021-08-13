import {Slideshow} from "./slideshow";
import NewList_grid from "../images/NewList_grid.png";
import NewList_2 from "../images/NewList_2.png";
import NewList_3 from "../images/NewList_3.png";
import D_NewList_grid from "../images/D_NewList_grid.png";
import {Third_Column} from "./third_column";
import {Container, Grid} from "@material-ui/core";
import {Slide} from "./slide";

const images = [
    NewList_grid,
    NewList_2,
    NewList_3,
    D_NewList_grid
];

export const Third_row = (props) => {

    const {data, className, ...rest } = props;

    return (
          <Grid
              className="third"
              justifyContent="space-between"
          >
              <Grid
                  container
                  justifyContent="space-between"
                  className="third_row ">
                  <div className="column third_space_end"></div>
                  <div className="column third_space hide"></div>
                  <div className="third_row">
                  {data.map((item, index) => (
                      <div>
                      <Third_Column
                          title={item.title1}
                          subtitle1={item.subtitle1}
                          subtitle2={item.subtitle2}
                          img={images[index]}//{NewList_grid}
                      />
                      <div className="column third_space"></div>
                      </div>
                  ))}
                  </div>
                  <div className="column third_space_end"></div>
              </Grid>
              <Slideshow data={props.data}/>
        </Grid>
    );
}