/** GrantRoundImplementation contract ABI in Human Readable ABI Format  */

const roundImplementation = [
  "event Initialized(uint8 version)",
  "event MetadataUpdated(tuple(uint256 protocol, string pointer) oldMetaPtr, tuple(uint256 protocol, string pointer) newMetaPtr)",
  "event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)",
  "event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)",
  "event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)",
  "event TimeUpdated(string typeOfTime, uint256 oldTime, uint256 newTime)",
  "function DEFAULT_ADMIN_ROLE() view returns (bytes32)",
  "function ROUND_OPERATOR_ROLE() view returns (bytes32)",
  "function getRoleAdmin(bytes32 role) view returns (bytes32)",
  "function grantApplicationsStartTime() view returns (uint256)",
  "function grantRole(bytes32 role, address account)",
  "function hasRole(bytes32 role, address account) view returns (bool)",
  "function initialize(address _votingContract, uint256 _grantApplicationsStartTime, uint256 _roundStartTime, uint256 _roundEndTime, address _token, tuple(uint256 protocol, string pointer) _metaPtr, address[] _roundOperators)",
  "function metaPtr() view returns (uint256 protocol, string pointer)",
  "function renounceRole(bytes32 role, address account)",
  "function revokeRole(bytes32 role, address account)",
  "function roundEndTime() view returns (uint256)",
  "function roundStartTime() view returns (uint256)",
  "function supportsInterface(bytes4 interfaceId) view returns (bool)",
  "function token() view returns (address)",
  "function updateGrantApplicationsStartTime(uint256 _newGrantApplicationsStartTime)",
  "function updateMetaPtr(tuple(uint256 protocol, string pointer) _newMetaPtr)",
  "function updateRoundEndTime(uint256 _newRoundEndTime)",
  "function updateRoundStartTime(uint256 _newRoundStartTime)",
  "function vote(tuple(address token, uint256 amount, address grantAddress, address voterAddress)[] _votes)",
  "function votingContract() view returns (address)"
]

export default roundImplementation