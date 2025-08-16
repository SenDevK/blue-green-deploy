This project showcases an advanced, zero-downtime release strategy. I built a real-time polling application using Node.js and WebSockets, containerized it, and deployed it to a Kubernetes cluster.

The core of the project is the implementation of a Blue-Green Deployment. Two identical production environments ("Blue" and "Green") are deployed simultaneously. Traffic is switched from the old version to the new version instantly and safely by changing a single label selector in the Kubernetes Service, with no interruption to the user.

Technologies Used: Kubernetes, Docker, Node.js, WebSockets, Blue-Green Deployment Strategy.
