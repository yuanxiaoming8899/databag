/*
 * DataBag
 *
 * DataBag provides storage for decentralized identity based self-hosting apps. It is intended to support sharing of personal data and hosting group conversations. 
 *
 * API version: 0.0.1
 * Contact: roland.osborne@gmail.com
 * Generated by: Swagger Codegen (https://github.com/swagger-databag/swagger-codegen.git)
 */
package databag

type Disconnect struct {

	RequestorId string `json:"requestorId"`

	RequestedId string `json:"requestedId"`

	Timestamp int32 `json:"timestamp"`
}
