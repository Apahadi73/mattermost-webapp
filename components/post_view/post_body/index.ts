// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getPost} from 'mattermost-redux/selectors/entities/posts';
import {getUser} from 'mattermost-redux/selectors/entities/users';

import {GlobalState} from 'types/store';
import {UserActivityPost} from 'mattermost-redux/types/posts';

import PostBody, {Props as PostBodyProps} from './post_body';

interface OwnProps {
    post: UserActivityPost;
    compactDisplay: PostBodyProps['compactDisplay'];
    isCommentMention: PostBodyProps['isCommentMention'];
    isFirstReply: PostBodyProps['isFirstReply'];
    handleFileDropdownOpened: PostBodyProps['handleFileDropdownOpened'];
    handleCommentClick: PostBodyProps['handleCommentClick'];
}

function mapStateToProps(state: GlobalState, ownProps: OwnProps) {
    let parentPost;
    let parentPostUser;
    if (ownProps.post.root_id) {
        parentPost = getPost(state, ownProps.post.root_id);
        parentPostUser = parentPost ? getUser(state, parentPost.user_id) : null;
    }

    return {
        parentPost,
        parentPostUser,
        pluginPostTypes: state.plugins.postTypes,
    };
}

export default connect(mapStateToProps)(PostBody);
