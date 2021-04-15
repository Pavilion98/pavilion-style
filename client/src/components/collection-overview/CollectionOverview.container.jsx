import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../actions/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';

import CollectionOverview from '../collection-overview/CollectionOverview';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default CollectionOverviewContainer;












// const CollectionOverviewContainer = compose(
//     connect(mapStateToProps),
//     WithSpinner
// )(CollectionOverview)