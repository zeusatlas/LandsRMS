
export enum OrgUnitType {
    NATIONAL = "NATIONAL",
    REGION = "REGION",
    DISTRICT = "DISTRICT",
    UNIT = "UNIT",
  }
  
  export enum UserStatus {
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED",
  }
  
  export enum PartyType {
    PERSON = "PERSON",
    ORGANIZATION = "ORGANIZATION",
  }
  
  export enum PaymentMethodType {
    MOMO = "MOMO",
    CARD = "CARD",
    BANK = "BANK",
  }
  
  export enum ProviderCode {
    MTN_MOMO = "MTN_MOMO",
    VISA = "VISA",
    // extend as required
  }
  
  export enum PropertyStatus {
    AVAILABLE = "AVAILABLE",
    LEASED = "LEASED",
    SUSPENDED = "SUSPENDED",
    REDEVELOPMENT = "REDEVELOPMENT",
  }
  
  export enum UnitStatus {
    AVAILABLE = "AVAILABLE",
    LEASED = "LEASED",
    UNAVAILABLE = "UNAVAILABLE",
  }
  
  export enum DocumentOwnerType {
    PROPERTY = "PROPERTY",
    LEASE = "LEASE",
    INVOICE = "INVOICE",
    PAYMENT = "PAYMENT",
    MANDATE = "MANDATE",
    PARTY = "PARTY",
  }
  
  export enum LeaseStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    SUSPENDED = "SUSPENDED",
    TERMINATED = "TERMINATED",
    EXPIRED = "EXPIRED",
  }
  
  export enum Frequency {
    MONTHLY = "MONTHLY",
    YEARLY = "YEARLY",
  }
  
  export enum ChargeFrequency {
    MONTHLY = "MONTHLY",
    YEARLY = "YEARLY",
    // add others if needed
  }
  
  export enum ApprovalTargetType {
    LEASE = "LEASE",
    INVOICE = "INVOICE",
    REFUND = "REFUND",
    ADJUSTMENT = "ADJUSTMENT",
  }
  
  export enum ApprovalState {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    CANCELLED = "CANCELLED",
  }
  
  export enum BillingRunType {
    AUTOMATIC = "AUTOMATIC",
    MANUAL = "MANUAL",
  }
  
  export enum InvoiceStatus {
    DRAFT = "DRAFT",
    ISSUED = "ISSUED",
    PARTIALLY_PAID = "PARTIALLY_PAID",
    PAID = "PAID",
    VOID = "VOID",
  }
  
  export enum DunningStage {
    FIRST = "FIRST",
    SECOND = "SECOND",
    FINAL = "FINAL",
    LEGAL = "LEGAL",
  }
  
  export enum DunningChannel {
    SMS = "SMS",
    EMAIL = "EMAIL",
    PUSH = "PUSH",
    LETTER = "LETTER",
  }
  
  export enum DeliveryStatus {
    SENT = "SENT",
    FAILED = "FAILED",
  }
  
  export enum PaymentProviderStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
  }
  
  export enum MandateStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    SUSPENDED = "SUSPENDED",
    REVOKED = "REVOKED",
    EXPIRED = "EXPIRED",
  }
  
  export enum PaymentMethodEnum {
    MOMO = "MOMO",
    CARD = "CARD",
    BANK = "BANK",
    CASH = "CASH",
  }
  
  export enum PaymentChannel {
    MOBILE_APP = "MOBILE_APP",
    WEB_APP = "WEB_APP",
    BACKOFFICE = "BACKOFFICE",
    AUTOPAY = "AUTOPAY",
    FIELD_POS = "FIELD_POS",
  }
  
  export enum PaymentStatus {
    PENDING = "PENDING",
    SETTLED = "SETTLED",
    FAILED = "FAILED",
    REVERSED = "REVERSED",
  }
  
  export enum ReconciliationStatus {
    IMPORTED = "IMPORTED",
    PARTIAL = "PARTIAL",
    MATCHED = "MATCHED",
    MISMATCH = "MISMATCH",
  }
  
  export enum MatchStatus {
    MATCHED = "MATCHED",
    UNMATCHED = "UNMATCHED",
    MULTIPLE = "MULTIPLE",
  }
  
  export enum AdjustmentType {
    CREDIT_NOTE = "CREDIT_NOTE",
    DEBIT_NOTE = "DEBIT_NOTE",
    REFUND = "REFUND",
  }
  
  export enum AdjustmentStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    POSTED = "POSTED",
    REJECTED = "REJECTED",
  }
  
  export enum NotificationRecipientType {
    PARTY = "PARTY",
    USER = "USER",
  }
  
  export enum NotificationChannel {
    SMS = "SMS",
    EMAIL = "EMAIL",
    PUSH = "PUSH",
    INAPP = "INAPP",
  }
  
  export enum NotificationStatus {
    QUEUED = "QUEUED",
    SENT = "SENT",
    FAILED = "FAILED",
  }
  
  export enum WebhookEventStatus {
    PENDING = "PENDING",
    DELIVERED = "DELIVERED",
    FAILED = "FAILED",
  }
  
  export enum JobType {
    BILLING_GENERATE = "BILLING_GENERATE",
    AUTOPAY_CAPTURE = "AUTOPAY_CAPTURE",
    DUNNING_SEND = "DUNNING_SEND",
  }
  
  export enum JobStatus {
    QUEUED = "QUEUED",
    RUNNING = "RUNNING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    CANCELLED = "CANCELLED",
  }
  
  export enum JobTargetType {
    LEASE = "LEASE",
    INVOICE = "INVOICE",
    PAYMENT = "PAYMENT",
    MANDATE = "MANDATE",
  }
  