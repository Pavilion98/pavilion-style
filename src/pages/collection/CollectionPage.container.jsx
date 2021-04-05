import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';

import { selectIsCollectionLoaded } from '../../actions/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionPage from '../collection/CollectionPage';


const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionPageContainer;