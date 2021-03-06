// all used messages

// all language keys
const KEYS = {
    VERIFY_REQUIRED_INFORMATION: 'VERIFY_REQUIRED_INFORMATION',
    WRONG_PASSWORD: 'WRONG_PASSWORD',
    WRONG_SESSION: 'WRONG_SESSION',
    USER_ADD_SUCCESS: 'USER_ADD_SUCCESS',
    USER_VIEW_SUCCESS: 'USER_VIEW_SUCCESS',
    USER_UPDATE_SUCCESS: 'USER_UPDATE_SUCCESS',
    USER_DELETE_SUCCESS: 'USER_DELETE_SUCCESS',
    USER_IS_EXIST: 'USER_IS_EXIST',
    USER_NOT_EXIST: 'USER_NOT_EXIST',
    USER_ALREADY_EXIST: 'USER_ALREADY_EXIST',
    USER_ID_NOT_FOUND: 'USER_ID_NOT_FOUND',
    USER_EMAIL_NOT_FOUND: 'USER_EMAIL_NOT_FOUND',
    USER_ADD_ERROR: 'USER_ADD_ERROR',
    USER_UPDATE_ERROR: 'USER_UPDATE_ERROR',
    USER_DELETE_ERROR: 'USER_DELETE_ERROR',
    DUPLICATE_USER_UNIQUE: 'DUPLICATE_USER_UNIQUE',
    REQUIRED_USER_FIELD: 'REQUIRED_USER_FIELD',
    USER_LIST_ERROR: 'USER_LIST_ERROR',
    USER_LIST_DELETE_SUCCESS: 'USER_LIST_DELETE_SUCCESS',
    REQUIRED_LOAN_FIELD: 'REQUIRED_LOAN_FIELD',
    LOAN_UPDATE_SUCCESS: 'LOAN_UPDATE_SUCCESS',
    LOAN_UPDATE_ERROR: 'LOAN_UPDATE_ERROR',
    FRANCHISE_ADD_SUCCESS: 'FRANCHISE_ADD_SUCCESS',
    FRANCHISE_VIEW_SUCCESS: 'FRANCHISE_VIEW_SUCCESS',
    FRANCHISE_UPDATE_SUCCESS: 'FRANCHISE_UPDATE_SUCCESS',
    FRANCHISE_DELETE_SUCCESS: 'FRANCHISE_DELETE_SUCCESS',
    FRANCHISE_IS_EXIST: 'FRANCHISE_IS_EXIST',
    FRANCHISE_NOT_EXIST: 'FRANCHISE_NOT_EXIST',
    FRANCHISE_ID_NOT_FOUND: 'FRANCHISE_ID_NOT_FOUND',
    FRANCHISE_IS_EMPTY: 'FRANCHISE_IS_EMPTY',
    DUPLICATE_FRANCHISE_NAME: 'DUPLICATE_FRANCHISE_NAME',
    REQUIRED_FRANCHISE_NAME: 'REQUIRED_FRANCHISE_NAME',
    FRANCHISE_ADD_ERROR: 'FRANCHISE_ADD_ERROR',
    FRANCHISE_UPDATE_ERROR: 'FRANCHISE_UPDATE_ERROR',
    FRANCHISE_DELETE_ERROR: 'FRANCHISE_DELETE_ERROR',
    FRANCHISE_LIST_ERROR: 'FRANCHISE_LIST_ERROR',
    FEATURE_ADD_SUCCESS: 'FEATURE_ADD_SUCCESS',
    FEATURE_VIEW_SUCCESS: 'FEATURE_VIEW_SUCCESS',
    FEATURE_UPDATE_SUCCESS: 'FEATURE_UPDATE_SUCCESS',
    FEATURE_DELETE_SUCCESS: 'FEATURE_DELETE_SUCCESS',
    FEATURE_IS_EXIST: 'FEATURE_IS_EXIST',
    FEATURE_NOT_EXIST: 'FEATURE_NOT_EXIST',
    FEATURE_ID_NOT_FOUND: 'FEATURE_ID_NOT_FOUND',
    FEATURE_IS_EMPTY: 'FEATURE_IS_EMPTY',
    DUPLICATE_FEATURE_NAME: 'DUPLICATE_FEATURE_NAME',
    REQUIRED_FEATURE_NAME: 'REQUIRED_FEATURE_NAME',
    FEATURE_ADD_ERROR: 'FEATURE_ADD_ERROR',
    FEATURE_UPDATE_ERROR: 'FEATURE_UPDATE_ERROR',
    FEATURE_DELETE_ERROR: 'FEATURE_DELETE_ERROR',
    FEATURE_LIST_ERROR: 'FEATURE_LIST_ERROR',
    EVENT_ADD_SUCCESS: 'EVENT_ADD_SUCCESS',
    EVENT_VIEW_SUCCESS: 'EVENT_VIEW_SUCCESS',
    EVENT_UPDATE_SUCCESS: 'EVENT_UPDATE_SUCCESS',
    EVENT_DELETE_SUCCESS: 'EVENT_DELETE_SUCCESS',
    EVENT_IS_EXIST: 'EVENT_IS_EXIST',
    EVENT_NOT_EXIST: 'EVENT_NOT_EXIST',
    EVENT_ID_NOT_FOUND: 'EVENT_ID_NOT_FOUND',
    DUPLICATE_EVENT_TITLE: 'DUPLICATE_EVENT_TITLE',
    REQUIRED_EVENT_TITLE: 'REQUIRED_EVENT_TITLE',
    EVENT_ADD_ERROR: 'EVENT_ADD_ERROR',
    EVENT_UPDATE_ERROR: 'EVENT_UPDATE_ERROR',
    EVENT_DELETE_ERROR: 'EVENT_DELETE_ERROR',
    EVENT_LIST_ERROR: 'EVENT_LIST_ERROR',
    ROLE_ADD_SUCCESS: 'ROLE_ADD_SUCCESS',
    ROLE_UPDATE_SUCCESS: 'ROLE_UPDATE_SUCCESS',
    ROLE_DELETE_SUCCESS: 'ROLE_DELETE_SUCCESS',
    DUPLICATE_ROLE_NAME: 'DUPLICATE_ROLE_NAME',
    REQUIRED_ROLE_NAME: 'REQUIRED_ROLE_NAME',
    ORDER_ADD_ERROR: 'ORDER_ADD_ERROR',
    ORDER_UPDATE_ERROR: 'ORDER_UPDATE_ERROR',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    EXPIRED_TOKEN: 'EXPIRED_TOKEN',
    UPDATE_TOKEN_SUCCESS: 'UPDATE_TOKEN_SUCCESS',
    UPDATE_TOKEN_ERROR: 'UPDATE_TOKEN_ERROR',
    EMPTY_FILE_UPLOAD: 'EMPTY_FILE_UPLOAD',
    FILE_UPLOAD_SUCCESS: 'FILE_UPLOAD_SUCCESS',
    FILE_UPLOAD_FAILED: 'FILE_UPLOAD_FAILED',
    MAXIMUM_FILE_SIZE: 'MAXIMUM_FILE_SIZE'
  };
  
  // all messages
  const DATA = [
    {
      key: KEYS.USER_ADD_SUCCESS,
      value: 'User successfully add',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.USER_VIEW_SUCCESS,
      value: 'User successfully view',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.USER_UPDATE_SUCCESS,
      value: 'User successfully update',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.USER_DELETE_SUCCESS,
      value: 'User successfully delete',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.USER_IS_EXIST,
      value: 'User data found / exist',
      language: 'en',
      code: '00',
      status: 200,
    },
    // ** Franchise Messages **//
    {
      key: KEYS.FRANCHISE_ADD_SUCCESS,
      value: 'Franchise successfully add',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.FRANCHISE_VIEW_SUCCESS,
      value: 'Franchise successfully view',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.FRANCHISE_UPDATE_SUCCESS,
      value: 'Franchise successfully update',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.FRANCHISE_DELETE_SUCCESS,
      value: 'Franchise successfully delete',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.FRANCHISE_IS_EXIST,
      value: 'Franchise data found / exist',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.FRANCHISE_NOT_EXIST,
      value: 'Cannot find Franchise with this keyword !',
      language: 'en',
      code: '44',
      status: 404,
    },
    {
      key: KEYS.FRANCHISE_ID_NOT_FOUND,
      value: 'Cannot find Franchise with this id !',
      language: 'en',
      code: '44',
      status: 404,
    },
    {
      key: KEYS.FRANCHISE_IS_EMPTY,
      value: 'Cannot find any Franchise data',
      language: 'en',
      code: '44',
      status: 404,
    },
    {
      key: KEYS.REQUIRED_FRANCHISE_NAME,
      value: 'Please verify required information !',
      language: 'en',
      code: '46',
      status: 409,
    },
    {
      key: KEYS.DUPLICATE_FRANCHISE_NAME,
      value: 'Duplicate Franchise name or phone found !',
      language: 'en',
      code: '48',
      status: 409,
    },
    {
      key: KEYS.FRANCHISE_ADD_ERROR,
      value: 'An error occured when inserting Franchise!',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.FRANCHISE_UPDATE_ERROR,
      value: 'An error occured when updating Franchise!',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.FRANCHISE_DELETE_ERROR,
      value: 'An error occured when deleting Franchise!',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.FRANCHISE_LIST_ERROR,
      value: 'An error occured when getting Franchise list!',
      language: 'en',
      code: '40',
      status: 400,
    },
    //** End Of Franchise Messages *//
    // ** Feature Messages **//
    {
      key: KEYS.FEATURE_ADD_SUCCESS,
      value: 'Feature successfully add',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.FEATURE_VIEW_SUCCESS,
      value: 'Feature successfully view',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.FEATURE_UPDATE_SUCCESS,
      value: 'Feature successfully update',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.FEATURE_DELETE_SUCCESS,
      value: 'Feature successfully delete',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.FEATURE_IS_EXIST,
      value: 'Feature data found / exist',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.FEATURE_NOT_EXIST,
      value: 'Cannot find Feature with this keyword !',
      language: 'en',
      code: '44',
      status: 404,
    },
    {
      key: KEYS.FEATURE_ID_NOT_FOUND,
      value: 'Cannot find Feature with this id !',
      language: 'en',
      code: '44',
      status: 404,
    },
    {
      key: KEYS.FEATURE_IS_EMPTY,
      value: 'Cannot find any Feature data',
      language: 'en',
      code: '44',
      status: 404,
    },
    {
      key: KEYS.REQUIRED_FEATURE_NAME,
      value: 'Please verify required information !',
      language: 'en',
      code: '46',
      status: 409,
    },
    {
      key: KEYS.DUPLICATE_FEATURE_NAME,
      value: 'Duplicate Feature name or phone found !',
      language: 'en',
      code: '48',
      status: 409,
    },
    {
      key: KEYS.FEATURE_ADD_ERROR,
      value: 'An error occured when inserting Feature!',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.FEATURE_UPDATE_ERROR,
      value: 'An error occured when updating Feature!',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.FEATURE_DELETE_ERROR,
      value: 'An error occured when deleting Feature!',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.FEATURE_LIST_ERROR,
      value: 'An error occured when getting Feature list!',
      language: 'en',
      code: '40',
      status: 400,
    },
    //** End Of Feature Messages *//
    // ** Event Messages **//
    {
      key: KEYS.EVENT_ADD_SUCCESS,
      value: 'Event successfully add',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.EVENT_VIEW_SUCCESS,
      value: 'Event successfully view',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.EVENT_UPDATE_SUCCESS,
      value: 'Event successfully update',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.EVENT_DELETE_SUCCESS,
      value: 'Event successfully delete',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.EVENT_IS_EXIST,
      value: 'Event data found / exist',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.EVENT_NOT_EXIST,
      value: 'Cannot find Event with this keyword !',
      language: 'en',
      code: '44',
      status: 404,
    },
    {
      key: KEYS.EVENT_ID_NOT_FOUND,
      value: 'Cannot find Event with this id !',
      language: 'en',
      code: '44',
      status: 404,
    },
    {
      key: KEYS.REQUIRED_EVENT_TITLE,
      value: 'Please verify required information !',
      language: 'en',
      code: '46',
      status: 409,
    },
    {
      key: KEYS.DUPLICATE_EVENT_TITLE,
      value: 'Duplicate Event title found !',
      language: 'en',
      code: '48',
      status: 409,
    },
    {
      key: KEYS.EVENT_ADD_ERROR,
      value: 'An error occured when inserting Event!',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.EVENT_UPDATE_ERROR,
      value: 'An error occured when updating Event!',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.EVENT_DELETE_ERROR,
      value: 'An error occured when deleting Event!',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.EVENT_LIST_ERROR,
      value: 'An error occured when getting Event list!',
      language: 'en',
      code: '40',
      status: 400,
    },
    //** End Of Event Messages *//
    {
      key: KEYS.ROLE_ADD_SUCCESS,
      value: 'Role successfully add',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.ROLE_UPDATE_SUCCESS,
      value: 'Role successfully update',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.ROLE_DELETE_SUCCESS,
      value: 'Role successfully delete',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.USER_ALREADY_EXIST,
      value: 'User already exist.',
      language: 'en',
      code: '48',
      status: 409,
    },
    {
      key: KEYS.VERIFY_REQUIRED_INFORMATION,
      value: 'Please verify required information.',
      language: 'en',
      code: '46',
      status: 409,
    },
    {
      key: KEYS.USER_NOT_EXIST,
      value: 'User not exist.',
      language: 'en',
      code: '44',
      status: 404,
    },
    {
      key: KEYS.WRONG_PASSWORD,
      value: 'Authentication failed. Wrong password.',
      language: 'en',
      code: '12',
      status: 403,
    },
    {
      key: KEYS.WRONG_SESSION,
      value: 'An error was occured, please logout and authenticate again !',
      language: 'en',
      code: '12',
      status: 403,
    },
    {
      key: KEYS.USER_ID_NOT_FOUND,
      value: 'Cannot find user with this id !',
      language: 'en',
      code: '44',
      status: 404,
    },
    {
      key: KEYS.USER_EMAIL_NOT_FOUND,
      value: 'Cannot find user with this email !',
      language: 'en',
      code: '43',
      status: 404,
    },
    {
      key: KEYS.USER_ADD_ERROR,
      value: 'An error occured when inserting user!',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.USER_UPDATE_ERROR,
      value: 'An error occured when updating user!',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.USER_DELETE_ERROR,
      value: 'An error occured when deleting user!',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.USER_LIST_ERROR,
      value: 'An error occured when getting user list !',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.USER_LIST_DELETE_SUCCESS,
      value: 'User list deleted with success !',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.REQUIRED_USER_FIELD,
      value: 'Missing required field !',
      language: 'en',
      code: '46',
      status: 409,
    },
    {
      key: KEYS.DUPLICATE_USER_UNIQUE,
      value: 'Duplicate Unique field !',
      language: 'en',
      code: '48',
      status: 409,
    },
    {
      key: KEYS.ORDER_ADD_ERROR,
      value: 'An error occured when inserting order!',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.ORDER_UPDATE_ERROR,
      value: 'An error occured when updating order!',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.LOGIN_SUCCESS,
      value: 'Login successfully',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.LOGIN_ERROR,
      value: 'An error occured when login',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.EXPIRED_TOKEN,
      value: 'Expired token when login',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.UPDATE_TOKEN_SUCCESS,
      value: 'Update token success',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.UPDATE_TOKEN_ERROR,
      value: 'An error occured when update token',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.REQUIRED_LOAN_FIELD,
      value: 'Missing required field !',
      language: 'en',
      code: '46',
      status: 409,
    },
    {
      key: KEYS.LOAN_UPDATE_SUCCESS,
      value: 'Loan state successfully update',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.LOAN_UPDATE_ERROR,
      value: 'An error occured when update loan state',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.EMPTY_FILE_UPLOAD,
      value: 'Please upload a file',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.FILE_UPLOAD_SUCCESS,
      value: 'Uploaded the file successfully',
      language: 'en',
      code: '00',
      status: 200,
    },
    {
      key: KEYS.FILE_UPLOAD_FAILED,
      value: 'An error occured when when upload file',
      language: 'en',
      code: '40',
      status: 400,
    },
    {
      key: KEYS.MAXIMUM_FILE_SIZE,
      value: 'Maximum upload file size, cannot be larger than 2MB!',
      language: 'en',
      code: '40',
      status: 400,
    }
  ];
  
  const Messages = {
    KEYS,
    DATA,
  };
  
  export default Messages;