import React from 'react';
import PostForm from '../containers/PostForm.js';
import {Link} from 'react-router';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';

class PostList extends React.Component {
  componentDidMount(){
    this.props.getPosts();
  }

  _handleRemove(id){
    const txt = this.props.intl.formatMessage({ id: 'post_list.deletion_confirmation', defaultMessage: 'Are you sure?' });
    if (!confirm(txt)) {
      return
    }
    this.props.removePost(id);
  }

  _handlePageClick(e){
    this.props.setPostOptions({page: e.selected + 1});
    this.props.getPosts();
  }

  _handleFilterChange(e){
    const filter = this.refs.filter.value;
    this.props.setPostOptions({filter: filter, page: 1});
    this.props.getPosts();
  }

  _handleOrderClick(newOrder){
    const oldOrder = this.props.posts.order;
    let newDirection = this.props.posts.order_direction;
    if (oldOrder == newOrder) {
      newDirection = (newDirection === 'asc') ? 'desc' : 'asc';
    }

    this.props.setPostOptions({order: newOrder, order_direction: newDirection});
    this.props.getPosts();
  }

  render() {
    const posts = this.props.posts.items;
    const filter = this.props.posts.filter;
    const t = {
      search: this.props.intl.formatMessage({ id: 'post_list.search', defaultMessage: 'Search' }),
      title: this.props.intl.formatMessage({ id: 'post_list.title', defaultMessage: 'Title' }),
      pageTitle: this.props.intl.formatMessage({ id: 'post_list.page_title', defaultMessage: 'Posts' }),
      date: this.props.intl.formatMessage({ id: 'post_list.date', defaultMessage: 'Date' }),
      delete: this.props.intl.formatMessage({ id: 'post_list.delete', defaultMessage: 'Delete' }),
    };

    const postNodes = posts.map((post) => {
      return (
        <li key={post.id} className="list-group-item">
          <button type="button" className="pull-sm-right btn btn-danger btn-sm" onClick={this._handleRemove.bind(this, post.id)}>{t.delete}</button>
          <strong>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </strong>
          <br/>
          { post.image.url ?
            <img src={post.image.url} width="100px"/>
            : null
          }
          {post.body}
        </li>
      );
    });

    const arrow = this.props.posts.order_direction === 'asc' ? '\u2193' : '\u2191';
    const orderButtons = [[t.title, 'title'], [t.date, 'created_at']].map((field) => {
      const order = this.props.posts.order;
      const active = field[1] === order;
      const btnClass = classNames({
        'btn': true,
        'btn-secondary': true,
        'active': active
      });

      return (
        <button key={field[0]} className={btnClass} onClick={this._handleOrderClick.bind(this, field[1])} >{field[0]} {active ? arrow : null}</button>
      );
    });

    return(
      <div>
        <div className="row">
          <div className="col-sm-12">
            <h2>
              {t.pageTitle}
            </h2>

            {/*pagination*/}
            <div className="row">
              <div className="col-sm-12 react-paginate">
                <ReactPaginate previousLabel={"<<"}
                               nextLabel={">>"}
                               pageNum={this.props.posts.total_pages}
                               marginPagesDisplayed={4}
                               pageRangeDisplayed={5}
                               clickCallback={this._handlePageClick.bind(this)}
                               containerClassName={"pagination"}
                               pageClassName="page-item"
                               previousClassName="page-item"
                               nextClassName="page-item"
                               pageLinkClassName="page-link"
                               previousLinkClassName="page-link"
                               nextLinkClassName="page-link"
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"} />
              </div>
            </div>

            <div className="btn-group" role="group">
              {orderButtons}
            </div>

            <div><input type="text" placeholder={t.search} className="form-control" ref="filter" defaultValue={filter} onChange={this._handleFilterChange.bind(this)} /></div>

            <ul className="list-group">
              {postNodes}
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <PostForm key="form" onPostSubmit={this.props.addPost}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
