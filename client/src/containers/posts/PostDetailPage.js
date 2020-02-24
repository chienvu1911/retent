import React, { Component } from "react";

export default class PostDetailPage extends Component {
  render() {
    return (
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 single-content">
              <p className="mb-5">
                <img
                  src="images/big_img_1.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </p>
              <h1 className="mb-4">
                News Needs to Meet Its Audiences Where They Are
              </h1>
              <div className="post-meta d-flex mb-5">
                <div className="bio-pic mr-3">
                  <img
                    src="images/person_1.jpg"
                    alt="Image"
                    className="img-fluidid"
                  />
                </div>
                <div className="vcard">
                  <span className="d-block">
                    <a href="#">Dave Rogers</a> in <a href="#">News</a>
                  </span>
                  <span className="date-read">
                    Jun 14 <span className="mx-1">•</span> 3 min read{" "}
                    <span className="icon-star2" />
                  </span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit officia neque beatae at inventore excepturi numquam
                sint commodi alias, quam consequuntur corporis ex, distinctio
                eaque sapiente pariatur iure ad necessitatibus in quod obcaecati
                natus consequatur. Sed dicta maiores, eos culpa.
              </p>
              <p>
                Voluptatum animi, voluptate sint aperiam facere a nam, ex
                reiciendis eum nemo ipsum nobis, rem illum cupiditate at quaerat
                amet qui recusandae hic, atque laboriosam perspiciatis? Esse
                quidem minima, voluptas necessitatibus, officia culpa quo nulla,
                cupiditate iste vel unde magni.
              </p>
              <p>
                Nulla nesciunt eligendi ratione, atque, hic, ullam suscipit quos
                enim vitae fugiat ducimus, dolore delectus iste id culpa.
                Ducimus, iste magnam sed reprehenderit architecto perferendis
                odio voluptas molestiae quidem ab numquam debitis, dolorem
                incidunt, tempore a quod qui nobis. Voluptates!
              </p>
              <p>
                Blanditiis, ipsum sed odio reprehenderit sequi ut vitae, dolor
                minima ab! Architecto nesciunt nemo sint est aspernatur fugit
                consequatur, magnam suscipit asperiores illo eum repellendus
                officia dolorem, molestiae commodi nam voluptatem quis quia vel
                cumque quos, aliquam ex incidunt sapiente!
              </p>
              <p>
                Suscipit, officiis, vero! Perferendis accusamus quos voluptatum
                culpa, provident maiores! Illo itaque ullam fugit molestiae,
                eaque accusamus impedit autem numquam. Placeat molestias tempore
                eaque ipsam vel voluptatum velit enim quam iusto maxime
                delectus, sint sapiente ea, quo excepturi nisi! Quia.
              </p>
              <p>
                Dolores debitis excepturi maxime earum sapiente totam, quos
                dolore inventore tempore illum. Dolores explicabo sed amet aut
                atque, facere aliquid repudiandae quod possimus quo hic
                similique et voluptates fugit iure dolore quam ipsa numquam
                assumenda corporis? Dignissimos expedita fugit sapiente.
              </p>
              <p>
                Cupiditate ut, aspernatur labore obcaecati, eveniet aut velit
                nulla facere suscipit est recusandae vel error itaque earum
                doloremque hic necessitatibus dignissimos dolores libero
                laudantium ducimus! Rem dolorem ratione officia et, fugit non,
                fuga suscipit eos veritatis enim perspiciatis, magni sit!
              </p>
              <div className="pt-5">
                <p>
                  Categories: <a href="#">Design</a>, <a href="#">Events</a>{" "}
                  Tags: <a href="#">#html</a>, <a href="#">#trends</a>
                </p>
              </div>
              <div className="pt-5">
                <div className="section-title">
                  <h2 className="mb-5">6 Comments</h2>
                </div>
                <ul className="comment-list">
                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <a href="#" className="reply">
                          Reply
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <a href="#" className="reply">
                          Reply
                        </a>
                      </p>
                    </div>
                    <ul className="children">
                      <li className="comment">
                        <div className="vcard bio">
                          <img
                            src="images/person_1.jpg"
                            alt="Image placeholder"
                          />
                        </div>
                        <div className="comment-body">
                          <h3>Jean Doe</h3>
                          <div className="meta">January 9, 2018 at 2:21pm</div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur quidem laborum necessitatibus, ipsam
                            impedit vitae autem, eum officia, fugiat saepe enim
                            sapiente iste iure! Quam voluptas earum impedit
                            necessitatibus, nihil?
                          </p>
                          <p>
                            <a href="#" className="reply">
                              Reply
                            </a>
                          </p>
                        </div>
                        <ul className="children">
                          <li className="comment">
                            <div className="vcard bio">
                              <img
                                src="images/person_1.jpg"
                                alt="Image placeholder"
                              />
                            </div>
                            <div className="comment-body">
                              <h3>Jean Doe</h3>
                              <div className="meta">
                                January 9, 2018 at 2:21pm
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Pariatur quidem laborum
                                necessitatibus, ipsam impedit vitae autem, eum
                                officia, fugiat saepe enim sapiente iste iure!
                                Quam voluptas earum impedit necessitatibus,
                                nihil?
                              </p>
                              <p>
                                <a href="#" className="reply">
                                  Reply
                                </a>
                              </p>
                            </div>
                            <ul className="children">
                              <li className="comment">
                                <div className="vcard bio">
                                  <img
                                    src="images/person_1.jpg"
                                    alt="Image placeholder"
                                  />
                                </div>
                                <div className="comment-body">
                                  <h3>Jean Doe</h3>
                                  <div className="meta">
                                    January 9, 2018 at 2:21pm
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Pariatur quidem laborum
                                    necessitatibus, ipsam impedit vitae autem,
                                    eum officia, fugiat saepe enim sapiente iste
                                    iure! Quam voluptas earum impedit
                                    necessitatibus, nihil?
                                  </p>
                                  <p>
                                    <a href="#" className="reply">
                                      Reply
                                    </a>
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <a href="#" className="reply">
                          Reply
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="comment-form-wrap pt-5">
                  <div className="section-title">
                    <h2 className="mb-5">Leave a comment</h2>
                  </div>
                  <form action="#" className="p-5 bg-light">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input type="url" className="form-control" id="website" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name
                        id="message"
                        cols={30}
                        rows={10}
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        defaultValue="Post Comment"
                        className="btn btn-primary py-3"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 ml-auto">
              <div className="section-title">
                <h2>Popular Posts</h2>
              </div>
              <div className="trend-entry d-flex">
                <div className="number align-self-start">01</div>
                <div className="trend-contents">
                  <h2>
                    <a href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </a>
                  </h2>
                  <div className="post-meta">
                    <span className="d-block">
                      <a href="#">Dave Rogers</a> in <a href="#">News</a>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">•</span> 3 min read{" "}
                      <span className="icon-star2" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="trend-entry d-flex">
                <div className="number align-self-start">02</div>
                <div className="trend-contents">
                  <h2>
                    <a href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </a>
                  </h2>
                  <div className="post-meta">
                    <span className="d-block">
                      <a href="#">Dave Rogers</a> in <a href="#">News</a>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">•</span> 3 min read{" "}
                      <span className="icon-star2" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="trend-entry d-flex">
                <div className="number align-self-start">03</div>
                <div className="trend-contents">
                  <h2>
                    <a href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </a>
                  </h2>
                  <div className="post-meta">
                    <span className="d-block">
                      <a href="#">Dave Rogers</a> in <a href="#">News</a>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">•</span> 3 min read{" "}
                      <span className="icon-star2" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="trend-entry d-flex pl-0">
                <div className="number align-self-start">04</div>
                <div className="trend-contents">
                  <h2>
                    <a href="blog-single.html">
                      News Needs to Meet Its Audiences Where They Are
                    </a>
                  </h2>
                  <div className="post-meta">
                    <span className="d-block">
                      <a href="#">Dave Rogers</a> in <a href="#">News</a>
                    </span>
                    <span className="date-read">
                      Jun 14 <span className="mx-1">•</span> 3 min read{" "}
                      <span className="icon-star2" />
                    </span>
                  </div>
                </div>
              </div>
              <p>
                <a href="#" className="more">
                  See All Popular <span className="icon-keyboard_arrow_right" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
