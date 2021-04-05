import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


import CollectionOverviewContainer from '../../components/collection-overview/CollectionOverview.container';
import CollectionPageContainer from '../collection/CollectionPage.container';
import { fetchCollectionsStartAsync } from '../../actions/index';



// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }


    render() {
        const { match } = this.props;
        return (
            <div className = 'shop-page'>
                <Route exact path = {`${match.path}`} component= { CollectionOverviewContainer }/>
                <Route path={`${match.path}/:collectionId`} component= {CollectionPageContainer} />
            </div>
            )
    }
}

// const mapStateToProps = createStructuredSelector ({
//     isCollectionFetching: selectIsCollectionFetching,
//     isCollectionLoaded: selectIsCollectionLoaded
// });

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});



export default connect(null, mapDispatchToProps)(ShopPage);