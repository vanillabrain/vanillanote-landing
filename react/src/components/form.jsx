import btn_google from "../images/btn_google.png";
import btn_app from "../images/btn_app.png";

export const Form = (props) => {
    return (
        <section className="fourth">
            <div className="cont_column">
                <p className="fourth_heading">문의/제안 하기</p>
                <div style={{height: '16px'}}></div>
                <p className="fourth_subheading">바닐라노트에 대한 문의 또는 제안을 남겨주세요.</p>
                <p className="fourth_subheading">보다 나은 서비스를 제공하는 바닐라 노트가 되겠습니다.</p>
                <div className="Rectangle-295">
                    <form className="form">
                        <label htmlFor="writer_name" className="writer_name">작성자명</label>
                        <input id="writer_name" name="writer_name" className="fourth_input" required>
                        </input>
                            <br/>
                            <label htmlFor="writer_email" className="writer_email">E-mail</label>
                            <input id="writer_email" name="writer_email" className="fourth_input" required>
                            </input>
                                <br/>
                                <label htmlFor="form_content" className="form_content">내용</label>
                                <textarea id="form_content" name="form_content" className="fourth_textarea"
                                          required></textarea>
                                <br/>
                                <button type="submit" className="Rectangle-19" onClick="onClick()">
                                    <span className="form_done">작성완료</span>
                                </button>
                    </form>
                </div>
                <div className="fourth_cont_row">
                    <img src={btn_google}
                         className="google">
                    </img>
                        <img src={btn_app}
                             className="app">
                        </img>
                </div>
                <div style={{height: '45px'}}/>
                <p className="footer"><span className="bold">바닐라브레인</span> 대표: 윤도선 사업자등록번호 511-60-00289</p>
                <p className="footer">Copyright © <span className="bold">VanillaBrain</span>. All rights
                    reserved.</p>
            </div>
        </section>
    );
}