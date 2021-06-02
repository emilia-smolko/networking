# Konfiguracja sieci w AWS
Do wykonania zamieszczonych tutaj ćwiczeń potrzebujesz konta AWS.

## ZAPOZNANIE SIĘ Z DOMYŚLNYM VPC
Zacznij od ZAPOZNANIE SIĘ Z DOMYŚLNYM VPC - jest to krok po kroku instrukcja jak poruszać się po domyślnej konfiguracji VPC w AWS, którą masz po utworzeniu konta w każdym regionie.<br>
[ZAPOZNANIE SIĘ Z DOMYŚLNYM VPC](https://github.com/emilia-smolko/networking/blob/main/defaultVPC.pdf)
## Podsieci, InternetGateway i NAT Gateway
Pierwsze ćwiczenie pokaże ci jak skonfigurować podsieci w VPC i podłączenie do Internetu z twojej prywatnej podsieci.<br>
[Ćwiczenie 1](https://github.com/emilia-smolko/networking/blob/main/Lab1.pdf)
## VPC Peering Connection, Transit Gateway
Drugie ćwiczenie to następny krok. Nauczysz się tutaj łączyć pomiędzy VPC z użyciem Peering Connection i Transit Gateway.<br>
[Ćwiczenie 2](https://github.com/emilia-smolko/networking/blob/main/Lab2.pdf)
## VPN-Site-to-Site && Transit Gateway
Trzecie ćwiczenie. Bazowe środowisko do konfiguracji powołasz ze skryptów tutaj dostępnych. Na zasymulowanym środowisku on-premises w AWS przetestujesz jak łączyć wiele VPC z lokalnym środowiskiem.<br>
[Ćwiczenie 3](https://github.com/emilia-smolko/networking/blob/main/Lab3.pdf)
## ACL, Security Groups, WAF
Czwarte ćwiczenie. Jest to zadanie udostępnienia WebServera z VPC-A w Internecie i uruchomienie dla tej usługi WAF z własnym filtrem (WAF ACL).
## VPC Endpoints, Security Policy
Piąte ćwiczenie. Bazowe środowisko do konfiguracji powołasz ze skryptów tutaj dostępnych. Odetniesz dostęp do Internet z maszyn w VPC A, B i C. Udostępnisz prywatne interfejsy do Session Managera, SNS i S3 w VPC B. Zapoznasz się z możliwościami definiowania Security Policy dla Endpointów.<br>
[Ćwiczenie 5](https://github.com/emilia-smolko/networking/blob/main/Lab5.pdf)
## FlowLogs in CloudWatch, Alarms, CloudTrail
Szóste ćwiczenie. Środowisko do monitorowania to konfiguracja po ćwiczeniu numer 5. Skonfigurujesz logowanie ruchu sieciowego w VPC i po wygenerowaniu ruchu zapoznasz się z dostępnymi informacjami w CloudWatch. Ustawisz automatyczne powiadomienie na przekroczenie wybranej metryki z interfejsu sieciowego. <br>
[Ćwiczenie 6](https://github.com/emilia-smolko/networking/blob/main/Lab6.pdf)
## CloudFront
Siódme ćwiczenie. Testujemy CloudFront publikując stronę umieszczoną w S3. <br>

## License
[MIT](https://github.com/emilia-smolko/networking/blob/main/LICENSE)
