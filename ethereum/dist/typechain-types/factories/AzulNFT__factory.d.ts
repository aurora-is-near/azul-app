import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides, Signer } from "ethers";
import type { AzulNFT, AzulNFTInterface } from "../AzulNFT";
declare type AzulNFTConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AzulNFT__factory extends ContractFactory {
    constructor(...args: AzulNFTConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AzulNFT>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AzulNFT;
    connect(signer: Signer): AzulNFT__factory;
    static readonly bytecode = "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c61335d61004b600039600081816109260152818161096601528181610a0a0152610a4a015261335d6000f3fe6080604052600436106101525760003560e01c806301ffc9a71461015757806306fdde031461018c578063081812fc146101ae578063095ea7b3146101db5780630c6d1f2a146101fd57806318160ddd1461027b57806323b872dd1461029a5780632f745c59146102ba57806334325dab146102da5780633659cfe6146102fa57806342842e0e1461031a5780634f1ef2861461033a5780634f6ccce71461034d5780636352211e1461036d5780636e9a7d0b1461038d57806370a08231146103ad578063715018a6146103cd5780637badfa2e146103e25780638da5cb5b1461040357806395d89b4114610418578063a22cb4651461042d578063b27f82f01461044d578063b88d4fde1461046d578063c4d66de81461048d578063c87b56dd146104ad578063d54ad2a1146104cd578063e985e9c5146104e4578063f2fde38b14610504578063f3fe12c914610524575b600080fd5b34801561016357600080fd5b50610177610172366004612cd0565b610544565b60405190151581526020015b60405180910390f35b34801561019857600080fd5b506101a161056f565b6040516101839190612f05565b3480156101ba57600080fd5b506101ce6101c9366004612c9e565b610601565b6040516101839190612eb4565b3480156101e757600080fd5b506101fb6101f6366004612bc0565b61068e565b005b34801561020957600080fd5b5061021d610218366004612c9e565b61079f565b604051610183919081511515815260208083015115159082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0918201516001600160a01b03169181019190915260e00190565b34801561028757600080fd5b506099545b604051908152602001610183565b3480156102a657600080fd5b506101fb6102b5366004612a97565b6107c0565b3480156102c657600080fd5b5061028c6102d5366004612bc0565b6107f1565b3480156102e657600080fd5b506101fb6102f5366004612d3e565b610887565b34801561030657600080fd5b506101fb610315366004612a41565b61091b565b34801561032657600080fd5b506101fb610335366004612a97565b6109e4565b6101fb610348366004612b71565b6109ff565b34801561035957600080fd5b5061028c610368366004612c9e565b610ab9565b34801561037957600080fd5b506101ce610388366004612c9e565b610b4c565b34801561039957600080fd5b506101fb6103a8366004612bec565b610bc3565b3480156103b957600080fd5b5061028c6103c8366004612a41565b610ce9565b3480156103d957600080fd5b506101fb610d70565b3480156103ee57600080fd5b5061016b546101ce906001600160a01b031681565b34801561040f57600080fd5b506101ce610dab565b34801561042457600080fd5b506101a1610dbb565b34801561043957600080fd5b506101fb610448366004612b43565b610dca565b34801561045957600080fd5b5061021d610468366004612c9e565b610dd5565b34801561047957600080fd5b506101fb610488366004612ad8565b610e55565b34801561049957600080fd5b506101fb6104a8366004612a41565b610e87565b3480156104b957600080fd5b506101a16104c8366004612c9e565b610f66565b3480156104d957600080fd5b5061028c6101605481565b3480156104f057600080fd5b506101776104ff366004612a5e565b611243565b34801561051057600080fd5b506101fb61051f366004612a41565b611271565b34801561053057600080fd5b5061028c61053f366004612d0a565b61130e565b60006001600160e01b0319821663780e9d6360e01b1480610569575061056982611759565b92915050565b60606065805461057e90613151565b80601f01602080910402602001604051908101604052809291908181526020018280546105aa90613151565b80156105f75780601f106105cc576101008083540402835291602001916105f7565b820191906000526020600020905b8154815290600101906020018083116105da57829003601f168201915b5050505050905090565b600061060c826117a9565b6106725760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152606960205260409020546001600160a01b031690565b600061069982610b4c565b9050806001600160a01b0316836001600160a01b031614156107075760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610669565b336001600160a01b038216148061072357506107238133611243565b6107905760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776044820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b6064820152608401610669565b61079a83836117c6565b505050565b6107a76128ef565b600082815261016a602052604090205461056990610dd5565b6107ca3382611834565b6107e65760405162461bcd60e51b815260040161066990613061565b61079a8383836118fe565b60006107fc83610ce9565b821061085e5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610669565b506001600160a01b03919091166000908152609760209081526040808320938352929052205490565b33610890610dab565b6001600160a01b0316146108b65760405162461bcd60e51b81526004016106699061302c565b8161016184600381106108cb576108cb6131fd565b6003020160000190805190602001906108e5929190612939565b508061016184600381106108fb576108fb6131fd565b600302016001019080519060200190610915929190612939565b50505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156109645760405162461bcd60e51b815260040161066990612f6a565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610996611a97565b6001600160a01b0316146109bc5760405162461bcd60e51b815260040161066990612fa4565b6109c581611ab3565b604080516000808252602082019092526109e191839190611ae2565b50565b61079a83838360405180602001604052806000815250610e55565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610a485760405162461bcd60e51b815260040161066990612f6a565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610a7a611a97565b6001600160a01b031614610aa05760405162461bcd60e51b815260040161066990612fa4565b610aa982611ab3565b610ab582826001611ae2565b5050565b6000610ac460995490565b8210610b275760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610669565b60998281548110610b3a57610b3a6131fd565b90600052602060002001549050919050565b6000818152606760205260408120546001600160a01b0316806105695760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610669565b33610bcc610dab565b6001600160a01b031614610bf25760405162461bcd60e51b81526004016106699061302c565b60038110610bff57600080fd5b60005b825181101561079a576000838281518110610c1f57610c1f6131fd565b6020908102919091018101516040805160e081018252600180825260008286018181528385018a8152606085018381526080860184815260a0870185815260c0880186815299865261015f909a529690932094518554925161ffff1990931690151561ff00191617610100921515929092029190911784555191830191909155516002820155905160038201559151600483015551600590910180546001600160a01b0319166001600160a01b039092169190911790555080610ce18161318c565b915050610c02565b60006001600160a01b038216610d545760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610669565b506001600160a01b031660009081526068602052604090205490565b33610d79610dab565b6001600160a01b031614610d9f5760405162461bcd60e51b81526004016106699061302c565b610da96000611c29565b565b61012d546001600160a01b031690565b60606066805461057e90613151565b610ab5338383611c7c565b610ddd6128ef565b50600090815261015f6020908152604091829020825160e081018452815460ff80821615158352610100909104161515928101929092526001810154928201929092526002820154606082015260038201546080820152600482015460a08201526005909101546001600160a01b031660c082015290565b610e5f3383611834565b610e7b5760405162461bcd60e51b815260040161066990613061565b61091584848484611d47565b600054610100900460ff1680610ea0575060005460ff16155b610ebc5760405162461bcd60e51b815260040161066990612fde565b600054610100900460ff16158015610ede576000805461ffff19166101011790555b61016b80546001600160a01b0319166001600160a01b038416179055604080518082018252600480825263105e9d5b60e21b6020808401919091528351808501909452908352631056955360e21b90830152610f3991611d7a565b610f41611e01565b610f49611e84565b610f51611ee2565b8015610ab5576000805461ff00191690555050565b6060610f71826117a9565b610fd55760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610669565b6000610fe08361079f565b90506000610161826040015160038110610ffc57610ffc6131fd565b6003020160405180606001604052908160008201805461101b90613151565b80601f016020809104026020016040519081016040528092919081815260200182805461104790613151565b80156110945780601f1061106957610100808354040283529160200191611094565b820191906000526020600020905b81548152906001019060200180831161107757829003601f168201915b505050505081526020016001820180546110ad90613151565b80601f01602080910402602001604051908101604052809291908181526020018280546110d990613151565b80156111265780601f106110fb57610100808354040283529160200191611126565b820191906000526020600020905b81548152906001019060200180831161110957829003601f168201915b5050505050815260200160028201548152505090506040518060600160405280603e81526020016132ea603e91396111618360600151611f49565b6040518060400160405280601b81526020017a129919161299193232b9b1b934b83a34b7b71299191299a092991960291b81525083600001516040518060400160405280600b81526020016a01022b234ba34b7b71016960ad1b8152506111cb8760800151611f49565b60408051808201825260158152741299191612991934b6b0b3b29299191299a092991960591b60208083019190915289810151835180850185526006815265094c8c894dd160d21b81840152935161122b9a999897969594919201612df2565b60405160208183030381529060405292505050919050565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b3361127a610dab565b6001600160a01b0316146112a05760405162461bcd60e51b81526004016106699061302c565b6001600160a01b0381166113055760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610669565b6109e181611c29565b600080826040516020016113229190612dd6565b604051602081830303815290604052905060006002826040516113459190612dd6565b602060405180830381855afa158015611362573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906113859190612cb7565b600081815261015f6020908152604091829020825160e081018452815460ff8082161515808452610100909204161515938201939093526001820154938101939093526002810154606084015260038101546080840152600481015460a0840152600501546001600160a01b031660c08301529192509061143b5760405162461bcd60e51b815260206004820152601060248201526f496e76616c69642070617373636f646560801b6044820152606401610669565b80602001511561148d5760405162461bcd60e51b815260206004820152601d60248201527f4e465420636c61696d656420666f7220746869732070617373636f64650000006044820152606401610669565b60016020820152604081015160009061016190600381106114b0576114b06131fd565b600302016040518060600160405290816000820180546114cf90613151565b80601f01602080910402602001604051908101604052809291908181526020018280546114fb90613151565b80156115485780601f1061151d57610100808354040283529160200191611548565b820191906000526020600020905b81548152906001019060200180831161152b57829003601f168201915b5050505050815260200160018201805461156190613151565b80601f016020809104026020016040519081016040528092919081815260200182805461158d90613151565b80156115da5780601f106115af576101008083540402835291602001916115da565b820191906000526020600020905b8154815290600101906020018083116115bd57829003601f168201915b5050505050815260200160028201548152505090506001610160600082825461160391906130e2565b9091555050610160546060830152604081018051600191906116269083906130e2565b90525060408181015160808401908152600060a085018181523360c0870190815287835261015f602090815285842088518154928a015161ffff1990931690151561ff001916176101009215159290920291909117815594870151600186018190556060880151600287015593516003808701919091559151600486015551600590940180546001600160a01b0319166001600160a01b03909516949094179093559183916101619181106116dd576116dd6131fd565b6003020160008201518160000190805190602001906116fd929190612939565b5060208281015180516117169260018501920190612939565b506040918201516002909101556060840151600090815261016a6020522084905561174b6117413390565b84606001516120c4565b505060600151949350505050565b60006001600160e01b031982166380ac58cd60e01b148061178a57506001600160e01b03198216635b5e139f60e01b145b8061056957506301ffc9a760e01b6001600160e01b0319831614610569565b6000908152606760205260409020546001600160a01b0316151590565b600081815260696020526040902080546001600160a01b0319166001600160a01b03841690811790915581906117fb82610b4c565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061183f826117a9565b6118a05760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610669565b60006118ab83610b4c565b9050806001600160a01b0316846001600160a01b031614806118e65750836001600160a01b03166118db84610601565b6001600160a01b0316145b806118f657506118f68185611243565b949350505050565b826001600160a01b031661191182610b4c565b6001600160a01b0316146119795760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610669565b6001600160a01b0382166119db5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610669565b6119e68383836120de565b6119f16000826117c6565b6001600160a01b0383166000908152606860205260408120805460019290611a1a90849061310e565b90915550506001600160a01b0382166000908152606860205260408120805460019290611a489084906130e2565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716916000805160206132ca83398151915291a4505050565b600080516020613283833981519152546001600160a01b031690565b33611abc610dab565b6001600160a01b0316146109e15760405162461bcd60e51b81526004016106699061302c565b6000611aec611a97565b9050611af784612196565b600083511180611b045750815b15611b1557611b138484612229565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff16611c2257805460ff19166001178155604051611b90908690611b61908590602401612eb4565b60408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b179052612229565b50805460ff19168155611ba1611a97565b6001600160a01b0316826001600160a01b031614611c195760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608401610669565b611c2285612314565b5050505050565b61012d80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b03161415611cda5760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152606401610669565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611d528484846118fe565b611d5e84848484612354565b6109155760405162461bcd60e51b815260040161066990612f18565b600054610100900460ff1680611d93575060005460ff16155b611daf5760405162461bcd60e51b815260040161066990612fde565b600054610100900460ff16158015611dd1576000805461ffff19166101011790555b611dd9612461565b611de1612461565b611deb83836124cb565b801561079a576000805461ff0019169055505050565b600054610100900460ff1680611e1a575060005460ff16155b611e365760405162461bcd60e51b815260040161066990612fde565b600054610100900460ff16158015611e58576000805461ffff19166101011790555b611e60612461565b611e68612461565b611e70612461565b80156109e1576000805461ff001916905550565b600054610100900460ff1680611e9d575060005460ff16155b611eb95760405162461bcd60e51b815260040161066990612fde565b600054610100900460ff16158015611e60576000805461ffff1916610101179055611e68612461565b600054610100900460ff1680611efb575060005460ff16155b611f175760405162461bcd60e51b815260040161066990612fde565b600054610100900460ff16158015611f39576000805461ffff19166101011790555b611f41612461565b611e70612560565b606081611f6d5750506040805180820190915260018152600360fc1b602082015290565b60408051606480825260a0820190925260009160208201818036833701905050905060005b8315611ffc576000611fa5600a866131a7565b9050611fb2600a866130fa565b9450611fbf8160306130e2565b60f81b8383611fcd8161318c565b945081518110611fdf57611fdf6131fd565b60200101906001600160f81b031916908160001a90535050611f92565b6000816001600160401b0381111561201657612016613213565b6040519080825280601f01601f191660200182016040528015612040576020820181803683370190505b50905060005b828110156120bb5783600161205b838661310e565b612065919061310e565b81518110612075576120756131fd565b602001015160f81c60f81b828281518110612092576120926131fd565b60200101906001600160f81b031916908160001a905350806120b38161318c565b915050612046565b50949350505050565b610ab58282604051806020016040528060008152506125c0565b6001600160a01b0383166121395761213481609980546000838152609a60205260408120829055600182018355919091527f72a152ddfb8e864297c917af52ea6c1c68aead0fee1a62673fcc7e0c94979d000155565b61215c565b816001600160a01b0316836001600160a01b03161461215c5761215c83826125f3565b6001600160a01b0382166121735761079a81612690565b826001600160a01b0316826001600160a01b03161461079a5761079a828261273f565b803b6121fa5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610669565b60008051602061328383398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b6122885760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610669565b600080846001600160a01b0316846040516122a39190612dd6565b600060405180830381855af49150503d80600081146122de576040519150601f19603f3d011682016040523d82523d6000602084013e6122e3565b606091505b509150915061230b82826040518060600160405280602781526020016132a360279139612783565b95945050505050565b61231d81612196565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60006001600160a01b0384163b1561245657604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290612398903390899088908890600401612ec8565b602060405180830381600087803b1580156123b257600080fd5b505af19250505080156123e2575060408051601f3d908101601f191682019092526123df91810190612ced565b60015b61243c573d808015612410576040519150601f19603f3d011682016040523d82523d6000602084013e612415565b606091505b5080516124345760405162461bcd60e51b815260040161066990612f18565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506118f6565b506001949350505050565b600054610100900460ff168061247a575060005460ff16155b6124965760405162461bcd60e51b815260040161066990612fde565b600054610100900460ff16158015611e70576000805461ffff191661010117905580156109e1576000805461ff001916905550565b600054610100900460ff16806124e4575060005460ff16155b6125005760405162461bcd60e51b815260040161066990612fde565b600054610100900460ff16158015612522576000805461ffff19166101011790555b8251612535906065906020860190612939565b508151612549906066906020850190612939565b50801561079a576000805461ff0019169055505050565b600054610100900460ff1680612579575060005460ff16155b6125955760405162461bcd60e51b815260040161066990612fde565b600054610100900460ff161580156125b7576000805461ffff19166101011790555b611e7033611c29565b6125ca83836127c3565b6125d76000848484612354565b61079a5760405162461bcd60e51b815260040161066990612f18565b6000600161260084610ce9565b61260a919061310e565b60008381526098602052604090205490915080821461265d576001600160a01b03841660009081526097602090815260408083208584528252808320548484528184208190558352609890915290208190555b5060009182526098602090815260408084208490556001600160a01b039094168352609781528383209183525290812055565b6099546000906126a29060019061310e565b6000838152609a6020526040812054609980549394509092849081106126ca576126ca6131fd565b9060005260206000200154905080609983815481106126eb576126eb6131fd565b6000918252602080832090910192909255828152609a90915260408082208490558582528120556099805480612723576127236131e7565b6001900381819060005260206000200160009055905550505050565b600061274a83610ce9565b6001600160a01b039093166000908152609760209081526040808320868452825280832085905593825260989052919091209190915550565b606083156127925750816127bc565b8251156127a25782518084602001fd5b8160405162461bcd60e51b81526004016106699190612f05565b9392505050565b6001600160a01b0382166128195760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610669565b612822816117a9565b1561286e5760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606401610669565b61287a600083836120de565b6001600160a01b03821660009081526068602052604081208054600192906128a39084906130e2565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392906000805160206132ca833981519152908290a45050565b6040518060e001604052806000151581526020016000151581526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b82805461294590613151565b90600052602060002090601f01602090048101928261296757600085556129ad565b82601f1061298057805160ff19168380011785556129ad565b828001600101855582156129ad579182015b828111156129ad578251825591602001919060010190612992565b506129b99291506129bd565b5090565b5b808211156129b957600081556001016129be565b600082601f8301126129e357600080fd5b81356001600160401b038111156129fc576129fc613213565b612a0f601f8201601f19166020016130b2565b818152846020838601011115612a2457600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215612a5357600080fd5b81356127bc81613229565b60008060408385031215612a7157600080fd5b8235612a7c81613229565b91506020830135612a8c81613229565b809150509250929050565b600080600060608486031215612aac57600080fd5b8335612ab781613229565b92506020840135612ac781613229565b929592945050506040919091013590565b60008060008060808587031215612aee57600080fd5b8435612af981613229565b93506020850135612b0981613229565b92506040850135915060608501356001600160401b03811115612b2b57600080fd5b612b37878288016129d2565b91505092959194509250565b60008060408385031215612b5657600080fd5b8235612b6181613229565b91506020830135612a8c8161323e565b60008060408385031215612b8457600080fd5b8235612b8f81613229565b915060208301356001600160401b03811115612baa57600080fd5b612bb6858286016129d2565b9150509250929050565b60008060408385031215612bd357600080fd5b8235612bde81613229565b946020939093013593505050565b60008060408385031215612bff57600080fd5b82356001600160401b0380821115612c1657600080fd5b818501915085601f830112612c2a57600080fd5b8135602082821115612c3e57612c3e613213565b8160051b9250612c4f8184016130b2565b8281528181019085830185870184018b1015612c6a57600080fd5b600096505b84871015612c8d578035835260019690960195918301918301612c6f565b509997909101359750505050505050565b600060208284031215612cb057600080fd5b5035919050565b600060208284031215612cc957600080fd5b5051919050565b600060208284031215612ce257600080fd5b81356127bc8161324c565b600060208284031215612cff57600080fd5b81516127bc8161324c565b600060208284031215612d1c57600080fd5b81356001600160401b03811115612d3257600080fd5b6118f6848285016129d2565b600080600060608486031215612d5357600080fd5b8335925060208401356001600160401b0380821115612d7157600080fd5b612d7d878388016129d2565b93506040860135915080821115612d9357600080fd5b50612da0868287016129d2565b9150509250925092565b60008151808452612dc2816020860160208601613125565b601f01601f19169290920160200192915050565b60008251612de8818460208701613125565b9190910192915050565b60008a51612e04818460208f01613125565b8a5190830190612e18818360208f01613125565b8a51612e2a8183850160208f01613125565b8a51929091010190612e40818360208d01613125565b8851612e528183850160208d01613125565b8851929091010190612e68818360208b01613125565b8651612e7a8183850160208b01613125565b8651929091010190612e90818360208901613125565b8451612ea28183850160208901613125565b9101019b9a5050505050505050505050565b6001600160a01b0391909116815260200190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612efb90830184612daa565b9695505050505050565b6020815260006127bc6020830184612daa565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252602c9082015260008051602061326383398151915260408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c9082015260008051602061326383398151915260408201526b6163746976652070726f787960a01b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b604051601f8201601f191681016001600160401b03811182821017156130da576130da613213565b604052919050565b600082198211156130f5576130f56131bb565b500190565b600082613109576131096131d1565b500490565b600082821015613120576131206131bb565b500390565b60005b83811015613140578181015183820152602001613128565b838111156109155750506000910152565b600181811c9082168061316557607f821691505b6020821081141561318657634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156131a0576131a06131bb565b5060010190565b6000826131b6576131b66131d1565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146109e157600080fd5b80151581146109e157600080fd5b6001600160e01b0319811681146109e157600080fdfe46756e6374696f6e206d7573742062652063616c6c6564207468726f75676820360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef646174613a6170706c69636174696f6e2f6a736f6e3b636861727365743d5554462d382c2537422532326e616d65253232253341253232415a554c202d20a2646970667358221220efaeec983b7d0afe2ebdcd9e0a0ca0970eace11e2ffdd294d2c4b133ea0697f364736f6c63430008070033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): AzulNFTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AzulNFT;
}
export {};
