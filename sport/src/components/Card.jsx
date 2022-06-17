import { Component } from "react";

class Card extends Component {
    state = {};
    render() {
        return (
            <div className="col-3 card m-3 border-0">
                <img src="https://fakeimg.pl/200/" className="border card-img-top" />
                <div className="card-body border border-top-0">
                    <h5 className="card-title">課程名稱</h5>
                    <p className="card-text">教練名稱</p>
                    <p className="card-text"><small className="text-muted">地點</small></p>
                </div>
                <div class="bg-white card-footer border border-top-0"><span>評價</span><span className="m-5">$價錢</span></div>
            </div>
        )
    }
}

export default Card;