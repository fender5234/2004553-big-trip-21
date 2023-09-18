import PointListView from '../view/point-list/point-list-view.js';
import PointView from '../view/point/point-view.js';
import EditPointFormView from '../view/point-edit/point-edit-form-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  boardComponent = new PointListView();

  constructor({ boardContainer, pointsModel, destinationModel, offersModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
    this.destinationModel = destinationModel;
    this.offersModel = offersModel;
  }
  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];
    this.destinations = [...this.destinationModel.getDestinations()];
    this.offersModel = [...this.offersModel.getOffers()];
    console.log(this.offersModel[0]);

    const destinationOne = this.destinations[1];

    render(this.boardComponent, this.boardContainer);
    render(
      new EditPointFormView({ destinationOne }),
      this.boardComponent.getElement()
    );

    for (let i = 0; i < this.boardPoints.length; i++) {
      const point = this.boardPoints[i];
      const destinationName = this.destinations[i];
      render(
        new PointView({
          point,
          destinationName,
        }),
        this.boardComponent.getElement()
      );
    }
  }
}
